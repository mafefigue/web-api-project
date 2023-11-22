const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const compraShema = new Schema({
    id_producto: {},
    id_comprador: {},
    calificacion: {
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true});

module.exports = Mongoose.model("Compra", compraShema);