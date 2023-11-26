const express = require("express");
const router = express.Router();
const runValidation = require("../validators/index.middleware");

const { authentication } = require("../validators/auth.middleware")
const { createArticuleValidator, idInParams } = require("../validators/articule.validator");
const articuleController = require("../controllers/articulo.controller");

router.post(["/", "/id"], authentication, createArticuleValidator, runValidation, articuleController.saveArt);
router.get("/", runValidation, articuleController.findAll);
router.get("/:id", idInParams, runValidation, articuleController.findOneById);
router.patch("/hidden/:id", idInParams, runValidation, articuleController.changeHidden);
router.delete("/:id", idInParams, runValidation, articuleController.deleteOneArticle);

module.exports = router;