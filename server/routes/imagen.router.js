const express = require("express");
const router = express.Router();
const runValidation = require("../validators/index.middleware");

const imgController = require("../controllers/imgArt.controller");
const { ImgArtValidator, idInParams, ArticuleValidator } = require("../validators/imgArt.validator");

router.post(["/", "/:id"], ImgArtValidator, runValidation, imgController.saveImg);
router.get("/:id", idInParams, runValidation, imgController.findByArt);
router.delete("/:id", idInParams, ArticuleValidator, imgController.deleteOneImagen);
router.delete("/allDelete/:id", idInParams, runValidation, imgController.deleteAllbyArt);

module.exports = router;