const express = require("express");
const router = express.router();
const { body } = require("express-validator");
const User = require("../models/user");
const authController = require("../Controllers/auth");

router.put(
  "/signup",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject("E-mail address already exists !");
          }
        });
      })
      .normalizeEmail(),
    body("Password").trim().isLength({ min: 5 }),
    body("firstname").trim().not().isEmpty(),
    body("lastname").trim().not().isEmpty(),
    body("office").trim().not().isEmpty(),
  ],
  authController.signup
);

module.exports = router;
