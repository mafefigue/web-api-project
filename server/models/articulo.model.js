const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const articuloShema = new Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true,
        required: true
    },
    lista_deseos: {
        type: String,
        trim: true,
        required: true
    },
    precio:{
        type: Number,
        min: 0.00,
        default: 0.00
    },
    hidden: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

module.exports = Mongoose.model("Articulo", articuloShema);