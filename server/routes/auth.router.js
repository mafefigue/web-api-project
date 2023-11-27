const express = require("express");
const router = express.Router();
const runValidation = require("../validators/index.middleware");

const ROLES = require("../data/roles.constants.json");
const { authentication } = require("../validators/auth.middleware");
const { registerValidator, updateUserValidator, dataValidator ,idInParams } = require("../validators/auth.validator");
const authController = require("../controllers/auth.controller");

router.post("/register", registerValidator, runValidation, authController.register);
router.post("/login", authController.login);
router.get("/aboutMe", authentication, authController.aboutMe);
router.put("/", authentication, updateUserValidator, runValidation, authController.updateUser);
router.patch("/password/", authentication, updateUserValidator, runValidation, authController.changePassword);
router.patch("/reputation/:id", idInParams, updateUserValidator, runValidation, authController.changeReputation);

module.exports = router;