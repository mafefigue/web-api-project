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

controller.findOneById = async(req, res, next)=>{
    try {
        const {id}= req.params;
        const articule = await Articulo.findById(id);
        if(!articule){
            return res.status(404).json({ error: "Articule not found"});
        };
        return res.status(200).json({ articule });
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
};

controller.updateArticule = async(req, res, next)=>{
    try {
        const { id }= req.params;
        const { nombre, descripcion, lista_deseos, precio} = req.body;
        const articule = await Articulo.findById(id);
        if(!articule){
            return res.status(404).json({ error: "Articule not found"})
        };
        const updatedArticule = await Articulo.findByIdAndUpdate( id, {
            nombre: nombre,
            descripcion: descripcion,
            lista_deseos: lista_deseos,
            precio: precio
        }, {new: true});
        if(!updatedArticule){
            return res.status(500).json({ error: "Articule not updated"})
        }
        return res.status(200).json({ message: "Articule updated", articule: updatedArticule });
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
};

controller.deleteOneArticle = async(req, res, next)=>{
    try {
        const {id}= req.params;
        const articule = await Articulo.findById(id);
        if(!articule){
            return res.status(404).json({ error: "Articule not found"});
        };
        const deletedArticule = await Articulo.findByIdAndDelete(id);
        if(!deletedArticule){
            return res.status(500).json({ message: "Articule not deleted"});
        }
        return res.status(200).json({ message: "Articule deleted" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
}

module.exports = controller;