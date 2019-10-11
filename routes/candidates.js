var express = require('express');
var router = express.Router();
const db = require('../db');
const bcrypt = require('bcryptjs');
const randToken = require('rand-token')
const getPredictions = require('./getPredictions')

//ADD USER TO DATABASE
router.post('/create-user-profile',(req,res,next)=>{

  //GET USER DATA FROM THE ACTION CREATOR
  const {username,nameFirst,nameLast,email,phone,password} = req.body

  //CHECK TO SEE IF USER EXISTS
  const checkUserQuery = `
    SELECT *
    FROM candidates
    WHERE email = ?
  `
  db.query(checkUserQuery,[email],(err,results)=>{
    if(err) throw err;
    if(results.length > 0){
      //this email has been used
      res.json({
        msg: 'userExists'
      });
    } else {
        const insertQuery = `
        INSERT INTO candidates
            (nameLast,nameFirst,email,phone,password)
        VALUES
            (?,?,?,?,?)
        `
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password,salt);
        //NOT CURRENTLY ALLOWING USERS TO LOGIN
        // SETTING UP FOR FUTURE FUNCTIONALITY
        const token = randToken.uid(50);
        console.log('made it to insert query')
        db.query(insertQuery,[nameLast,nameFirst,email,phone,hash,token],(err2) =>{
            if(err2){throw err2};
            res.json({
                msg: "userAdded",
                token,
            })
        })
    }
    })
})

router.get('/candidates',(req,res,next)=>{
  console.log('candidates route')
  const getCandidatesQuery = `
    SELECT *
    FROM candidates 
    LIMIT 10
  `
  db.query(getCandidatesQuery,(err,results)=>{
    console.log('positions query')
    if(err) throw err;
    res.json(results)
  })
})

router.get('/candidateProfile/:position_id/:id',(req,res,next)=>{
  const id = req.params.id 
  const positionsQuery = `
    SELECT 
      GROUP_CONCAT(candidate.user_skill) as skills,
      candidate.id,
      candidate.name,
      candidate.location,
      candidate.description,
      candidate.title
    FROM (
      SELECT candidates.*, skills.skill as user_skill
      FROM candidates
      JOIN users_skills 
        ON users_skills.user_id = candidates.id
      JOIN skills 
        ON skills.id = users_skills.skill_id
      WHERE 
        candidates.id = ?) as candidate  
  `
  db.query(positionsQuery,[id],(err,results)=>{
    console.log('positions query')
    if(err) throw err;
    res.json(results)
  })
})

//THIS ROUTE NEEDS TO UPDATE THE ACCEPTED 'FIELD' FOR THE CANDIDATE
router.post('/accept-decline-candidate/:position_id/:userId/:value',(req,res,next)=>{
  const value = req.params.value
  const userId = req.params.userId
  const position_id = req.params.position_id
  console.log('accep-decline-route')
  //CHECK TO SEE IF USER_POSITION PAIR ALREADY EXISTS
  const checkPairQuery = `
  SELECT id
  FROM candidates_positions_accepted
  WHERE 
    user_id = ? AND
    position_id = ?
  `
  db.query(checkPairQuery,[userId,position_id],(err,results)=>{
    if(err) throw err
    if(results.length > 0){
      //IF THE PAIR EXISTS, UPDATE RECORD 
      const updateQuery = `
      UPDATE candidates_positions_accepted
      SET accepted = ?
      WHERE 
        user_id = ? AND
        position_id = ?
      `
      db.query(updateQuery,[value,userId,position_id],(err)=>{
        if(err) throw err
        res.json({
          msg: "RecordUpdated"
        })
      })
    } else {
      //ELSE PAIR DOES NOT EXIST, CREATE RECORD
      const insertPairQuery = `
      INSERT INTO candidates_positions_accepted
        (user_id,position_id,accepted)
      VALUES
        (?,?,?)
      `
      db.query(insertPairQuery,[userId,position_id,value],(err)=>{
        if(err) throw err
        res.json({
          msg: "RecordCreated"
        })
      })
    }
  })
})



module.exports = router;
