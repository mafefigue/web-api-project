const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const imgArtShema = new Schema({
    id_ref: {},
    dir:{
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true});

module.exports = Mongoose.model("Imagen_Articulo", imgArtShema);