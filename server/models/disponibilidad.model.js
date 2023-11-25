const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const disponibleShema = new Schema({
    estado:{
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true});

module.exports = Mongoose.model("Disponibilidad", disponibleShema);