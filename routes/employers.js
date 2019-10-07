var express = require('express');
var router = express.Router();
const db = require('../db');

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

router.get('/candidates',(req,res,next)=>{

})

module.exports = router;
