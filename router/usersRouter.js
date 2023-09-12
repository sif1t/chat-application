//external imports
const express = require("express");
const { check } = require("express-validator");

// internal imports
const {getUsers} = require("../controller/usersController");
const decorateHtmlResponse =require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/common/users/avatarUpload");


const router =  express.Router();


// users page
router.get("/",decorateHtmlResponse("Users"), getUsers);

// add user
router.post(
    "/",
    avatarUpload,
    addUserValidators,
    addUserValidationHandler,
    addUser
  );

module.exports = router;