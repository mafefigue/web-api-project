const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const articuloShema = new Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    precio:{
        type: float
    },
    descripcion: {
        type: String,
        trim: true,
        required: true
    },
    lista_deseos: {
        type: String
    }
}, {timestamps: true});

module.exports = Mongoose.model("Articulo", articuloShema);