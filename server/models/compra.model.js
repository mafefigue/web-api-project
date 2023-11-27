const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const compraShema = new Schema({
    id_producto: {
        type: Schema.Types.ObjectId,
        ref: "Articulo",
        required:true
    },
    id_comprador: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required:true
    },
    calificacion: {
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true});

module.exports = Mongoose.model("Compra", compraShema);