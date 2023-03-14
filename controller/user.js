const user = require('../models/users')

exports.signup = async(req, res, next) => {
   try{const name = req.body.name;
   const email = req.body.email;
   const password = req.body.password;
   if(name == null || password == null || email == null || name.length ===0 || email.length === 0 || password.length===0){
    return res.status(400).json({err:"Bad parameters.Something is missing"})
   }
    await user.create({
      name,
      email,
      password
    })
 res.status(201).json({message:"Successfully created new user"})
    }
      catch(err) { res.status(500).json(err)};
  };

