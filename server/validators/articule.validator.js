const { body, param } = require("express-validator");

const validators = {};

validators.createArticuleValidator = [
    param("id")
        .optional()
        .isMongoId().withMessage("ID is MongoID"),
    body("nombre")
        .trim()
        .notEmpty().withMessage("User is required")
        .isLength( {min:4 , max:32 }).withMessage("Username format incorrect"),
    body("descripcion")
        .trim()
        .notEmpty().withMessage("Description is required")
        .isLength( {min:4 , max:32 }).withMessage("Description format incorrect"),
    body("lista_deseos")
        .trim()
        .notEmpty().withMessage("Lista_deseos is required")
        .isString().withMessage("Lista_deseos format incorrect"),
    body("precio")
        .optional()
        .trim()
        .isNumeric().withMessage("Precio format incorrect")
];

validators.disponibilidadValidator = [
    body("estado")
        .notEmpty().withMessage("Status is required")
        .isIn(["Disponible", "Agotado", "Reservado"]).withMessage("Status format incorrect")
];

validators.idInParams = [
    param("id")
        .notEmpty().withMessage("ID is required")
        .isMongoId().withMessage("ID is MongoID")
];

module.exports = validators;