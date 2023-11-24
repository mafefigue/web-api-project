const { body, param } = require("express-validator");

const validators = {};
const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,32})/

validators.registerValidator = [
    body("username")
        .trim()
        .notEmpty().withMessage("User is required")
        .isLength( {min:4 , max:32 }).withMessage("Username format incorrect"),
    body("email")
        .trim()
        .notEmpty().withMessage("User is required")
        .isEmail().withMessage("Email format incorrect"),
    body("password")
        .trim()
        .notEmpty().withMessage("Password is required")
        .matches(passwordRegexp).withMessage("Password format incorrect")
];

validators.updateUserValidator = [
    body("username")
        .optional()
        .trim()
        .isLength( {min:4 , max:32 }).withMessage("Username format incorrect"),
    body("password")
        .optional()
        .trim()
        .matches(passwordRegexp).withMessage("Password format incorrect"),
    body("picture")
        .optional()
        .trim()
        .isString().withMessage("Picture is a string")
        .isURL().withMessage("Picture is a URL"),
    body("desc")
        .optional()
        .trim()
        .isString().withMessage("Desc is a String")
        .isLength( {min:10 , max:150 }).withMessage("Contact format incorrect"),
    body("reputacion")
        .optional()
        .trim()
        .isNumeric().withMessage("Reputacion is a number")
];

validators.idInParams = [
    param("id")
        .notEmpty().withMessage("ID is required")
        .isMongoId().withMessage("ID is MongoID")
];

module.exports = validators;