const user = require('../models/users')

exports.signup = (req, res, next) => {
   const name = req.body.name;
   const email = req.body.email;
   const password = req.body.password;
    user.create({
      name,
      email,
      password
    })
      .then((result) => {
          return res.send(JSON.stringify({result}));
      })
      .catch((err) => console.log(err));
       res.redirect('/')
  };

