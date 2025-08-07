const express = require("express");
const { signUp, signIn, signOut } = require("../controllers/userControllers");
const router = express.Router();
const { body } = require("express-validator");

router.post(
  "/signup",
  [
    //usernmae
    body("Username")
      .notEmpty()
      .withMessage("Username field required")
      .trim()
      .isLength({ min: 3, max: 40 })
      .withMessage("Username must be between 3-20 characters"),

    //password
    body("password")
      .isLength({ min: 8 })
      .withMessage("At least 8 characters")
      .matches(/[a-z]/)
      .withMessage("Must contain lowercase letter")
      .matches(/[A-Z]/)
      .withMessage("Must contain an uppercase letter")
      .matches(/\d/)
      .withMessage("Must contain a number")
      .matches(/[!@#$%^&*(),.?":{}|<>]/)
      .withMessage("Must contain a special character"), //email
    body("email")
      .notEmpty()
      .withMessage("email is required")
      .isEmail()
      .withMessage("please provide a valid email address")
      .normalizeEmail(),
  ],
  signUp
);
router.post("/signin", signIn);
router.post("/signout", signOut);

module.exports = router;
