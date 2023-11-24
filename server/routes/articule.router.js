const express = require("express");
const router = express.Router();
const runValidation = require("../validators/index.middleware");

const {  } = require("../validators/articule.validator");
const articuleController = require("../controllers/articulo.controller");

router.post("/", /*... ,*/ runValidation, articuleController.create);
router.get("/", /* ... ,*/ runValidation, articuleController.findAll);
router.get("/:id", /*... ,*/ runValidation, articuleController.findOneById);

module.exports = router;