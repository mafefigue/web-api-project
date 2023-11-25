const express = require("express");
const router = express.Router();

const authRouter = require("./auth.router")
const articuleRouter = require("./articule.router")

router.use("/auth", authRouter);
router.use("/articule", articuleRouter);

module.exports = router;