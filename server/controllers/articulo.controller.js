const Articulo = require("../models/articulo.model");

const controller = {};

controller.saveArt = async(req, res, next)=>{
    try {
        const { nombre, descripcion, lista_deseos, precio, imagenes } =req.body;
        const { id } = req.params;
        const { user } = req;
        const _precio = parseFloat(precio);
        let articule = await Articulo.findById(id);
        if(!articule){
            articule = new Articulo();
        };
        articule["nombre"] = nombre;
        articule["descripcion"] = descripcion;
        articule["lista_deseos"] = lista_deseos;
        articule["precio"] = _precio;
        articule["imagens"] = imagenes;
        const savedArticulo = await articule.save();
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

controller.changeHidden= async(req, res, next)=>{
    try {
        const { id }= req.params;
        const articule = await Articulo.findById(id);
        if(!articule){
            return res.status(404).json({ error: "Articule not found"})
        };
        articule.hidden = !articule.hidden;
        const updatedArticule = await articule.save();
        if(!updatedArticule){
            return res.status(500).json({ error: "Articule not updated"})
        }
        return res.status(200).json({ message: "Articule updated", articule: updatedArticule });
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
}

controller.deleteOneArticle = async(req, res, next)=>{
    try {
        const {id}= req.params;
        const deletedArticule = await Articulo.findByIdAndDelete(id);
        if(!deletedArticule){
            return res.status(404).json({ error: "Articule not found" });
        }
        return res.status(200).json({ message: "Articule deleted" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
}

module.exports = controller;