const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const ventaShema = new Schema({
    id_vendedor:{},
    id_producto: {}
}, {timestamps: true});

module.exports = Mongoose.model("Venta", ventaShema);