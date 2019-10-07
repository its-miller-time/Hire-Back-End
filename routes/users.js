var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/create-candidate', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',(req,res,next)=>{
  res.json({
    msg: "You suck"
  })
})

router.post('/createprofile/add-candiate',(req,res,next)=>{
  res.json({
    msg: "You still suck"
  })
})

module.exports = router;
