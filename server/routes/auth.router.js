const express = require("express");
const router = express.Router();
const runValidation = require("../validators/index.middleware");

const { registerValidator, updateUserValidator, dataValidator ,idInParams } = require("../validators/auth.validator");
const authController = require("../controllers/auth.controller");

router.post("/register", registerValidator, runValidation, authController.register);
router.post("/login", authController.login);
router.get("/:id", idInParams, runValidation, authController.findOneById);
router.put("/:id", idInParams, updateUserValidator, runValidation, authController.updateUser);
router.patch("/password/:id", idInParams, updateUserValidator, runValidation, authController.changePassword);
router.patch("/reputation/:id", idInParams, updateUserValidator, runValidation, authController.changeReputation);

module.exports = router;