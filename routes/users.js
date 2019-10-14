var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login',(req, res)=>{
  const { email, password } = req.body;
  // First: Check db for this email
  const getUserQuery = `SELECT * FROM candidates WHERE email = ?`;
  db.query(getUserQuery,[email],(err, results)=>{
    if(err){throw err}
    // check to see if there is a result
    if(results.length > 0){
      // found them!!!!
      const thisRow = results[0];
      // find out if the pass is correct
      const isValidPass = bcrypt.compareSync(password,thisRow.password);
      if(isValidPass){
        // these are the droids we're looking for
        const token = randToken.uid(50); // this is the users valet ticket
        const updateUserTokenQuery = `UPDATE candidates
          SET token = ? WHERE email = ?`
        db.query(updateUserTokenQuery,[token,email],(err)=>{
          if(err){throw err}
        });

        res.json({
          msg: "loggedIn",
          first: thisRow.name,
          email: thisRow.email,
          token
        });
      }else{
        // lier lier, pants on fire
        res.json({
          msg: "badPass"
        })
      }

    }else{
      // no match
      res.json({
        msg: "noEmail"
      })
    }
  })
})

module.exports = router;

