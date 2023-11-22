const express = require("express");
const router = express.Router();
const runValidation = require("../validators/index.middleware");

const { registerValidator } = require("../validators/auth.validator");
const authController = require("../controllers/auth.controller");

router.post("/register", registerValidator, runValidation, authController.register);

module.exports = router;