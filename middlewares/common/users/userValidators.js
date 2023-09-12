// external imports
const { check, validationResult } = require("express-validator");

// add user
const addUserValidators = [
    check("name")
      .isLength({ min: 1 })
      .withMessage("Name is required")
      .isAlpha("en-US", { ignore: " -" })
      .withMessage("Name must not contain anything other than alphabet")
      .trim(),
    check("email")
      .isEmail()
      .withMessage("Invalid email address")
      .trim()
];