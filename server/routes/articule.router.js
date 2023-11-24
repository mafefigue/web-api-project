const express = require("express");
const router = express.Router();
const runValidation = require("../validators/index.middleware");

const { createArticuleValidator, updateArticuleValidator, idInParams } = require("../validators/articule.validator");
const articuleController = require("../controllers/articulo.controller");

router.post("/", createArticuleValidator, runValidation, articuleController.create);
router.get("/", runValidation, articuleController.findAll);
router.get("/:id", idInParams, runValidation, articuleController.findOneById);
router.put("/:id", idInParams, updateArticuleValidator, runValidation, articuleController.updateArticule);
router.delete("/:id", idInParams, runValidation, articuleController.deleteOneArticle);

module.exports = router;