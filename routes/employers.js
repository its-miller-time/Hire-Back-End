var express = require('express');
var router = express.Router();
const db = require('../db');
const getPredictions = require('./getPredictions')


router.post('/create-position',(req,res,next)=>{
  const {company_name,title,years_of_experience} = req.body
  
  const insertPositionQuery = `
    INSERT INTO positions
      (company_name,title,years_of_experience)
    VALUES
      (?,?,?)
  `
  console.log(db)
  db.query(insertPositionQuery,[company_name,title,years_of_experience],(err)=>{
    if(err){throw err}
    res.json({
      msg: "Position Added"
    })
  })
})

router.get('/positions',(req,res,next)=>{
  console.log('position req:',req)
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
  console.log(positionId)
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
