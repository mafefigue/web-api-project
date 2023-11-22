const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const etiquetaShema = new Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true});

module.exports = Mongoose.model("Etiqueta", etiquetaShema);