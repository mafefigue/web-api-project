const Articulo = require("../models/articulo.model");

const controller = {};

controller.create = async(req, res, next)=>{
    try {
        const { nombre, descripcion, lista_deseos, precio } =req.body;
        const articulo = new Articulo({
            nombre: nombre,
            descripcion: descripcion,
            lista_deseos: lista_deseos,
            precio: precio
        });
        const savedArticulo = await articulo.save();
        if(!savedArticulo){
            return res.status(409).json({error: "Error creating articule"});
        }
        return res.status(201).json( savedArticulo );
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
};

controller.findAll = async(req, res, next)=>{
    try {
        const articules = await Articulo.find({ hidden: false});
        return res.status(200).json({ articules });
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
};

controller.findOneById = async(req, res, next)=>{};

module.exports = controller;