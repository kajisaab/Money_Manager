const User = require("../models/users");
const { validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");

exports.signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failde");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }

  const email = req.body.email;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const office = req.body.office;
  const password = req.body.password;
  bcrypt
    .hash(password, 12)
    .then((hashedpassword) => {
      const user = new User({
        email: email,
        password: hashedpassword,
        firstname: firstname,
        lastname: lastname,
        office: office,
      });
      return user.save();
    })
    .then((result) => {
      res.status(201).json({ message: "User Created", userId: result._id });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
