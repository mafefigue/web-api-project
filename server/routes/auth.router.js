const express = require("express");
const router = express.Router();
const runValidation = require("../validators/index.middleware");

const { registerValidator, updateUserValidator,idInParams } = require("../validators/auth.validator");
const authController = require("../controllers/auth.controller");

router.post("/register", registerValidator, runValidation, authController.register);
router.put("/:id", idInParams, updateUserValidator, runValidation, authController.updateUser);
router.patch("/reputation/:id", idInParams, runValidation, authController.changeReputation);

module.exports = router;