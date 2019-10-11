var express = require('express');
var router = express.Router();
const db = require('../db');
const getPredictions = require('./getPredictions')


router.post('/create-position',(req,res,next)=>{
  const {company_name,title,years_of_experience} = req.body
  
  //NEED TO GET THE PRIMARY KEY BACK FROM THE QUERY 
  
  const insertPositionQuery = `
    INSERT INTO positions
      (company_name,title,years_of_experience)
    VALUES
      (?,?,?);
  `
  db.query(insertPositionQuery,[company_name,title,years_of_experience],(err,results)=>{
    console.log(results.insertId)
    const position_id = results.insertId
    if(err){throw err}
    res.json({
      position_id: position_id //NEED TO  PUT ID IN THE RESPONSE 
    })
  })
})

router.get('/positions',(req,res,next)=>{
  const positionsQuery = `
    SELECT *
    FROM positions 
  `
  db.query(positionsQuery,(err,results)=>{
    console.log('positions query')
    if(err) throw err;
    res.json(results)
  })
})

//THIS ROUTE NEEDS TO PULL THE CANDIADATES THAT MATCH THE POSITION/USER ID
// FIELDS IN THE LINKING TABLE
router.get('/positions/:id',(req,res,next)=>{
  const positionId = req.params.id;
  console.log('will run getPredictions function')
  const data = getPredictions(positionId) //GET PREDICTIONS HANDLES ITS OWN QUERY, NEED TO HAND IT THE ID
    res.json({
      msg: data
    })
})



//THIS ROUTE NEED TO GENERATE A LIST OF CANDIDATES WITH POSITION TITLE
// THAT MATCH THE JOB POSTING POSITION
// router.get('/positions/:id',(req,res,next)=>{
//   console.log('position req:',req.body)
//   const positionsQuery = `
//     SELECT *
//     FROM candidates 
//     WHERE title = 
//   `
//   db.query(positionsQuery,(err,results)=>{
//     console.log('positions query')
//     if(err) throw err;
//     res.json(results)
//   })
// })



module.exports = router;
