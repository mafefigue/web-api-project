const express = require("express");
const router = express.Router();

const authRouter = require("./auth.router")
const articuleRouter = require("./articule.router")
const imgRouter = require("./imagen.router")
const etiquetaRouter = require("./etiqueta.router")

router.use("/auth", authRouter);
router.use("/articule", articuleRouter);
router.use("/Imagen", imgRouter);
router.use("/etiqueta", etiquetaRouter);

module.exports = router;