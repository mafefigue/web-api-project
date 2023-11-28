const Articulo = require("../models/articulo.model");

const controller = {};

controller.saveArt = async(req, res, next)=>{
    try {
        const { nombre, descripcion, lista_deseos, precio, etiqueta } =req.body;
        const { id } = req.params;
        const { user } = req;
        const _precio = parseFloat(precio);
        let articule = await Articulo.findById(id);
        if(!articule){
            articule = new Articulo();
            articule["user"] = user._id;
        }else{
            if(!articule["user"].equals(user._id)){
                return res.status(403).json({ error: "This is not your articule"});
            }
        };
        articule["nombre"] = nombre;
        articule["descripcion"] = descripcion;
        articule["lista_deseos"] = lista_deseos;
        articule["precio"] = _precio;
        articule["etiquetas"] = etiqueta;
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
        const { pagination=true, limit=5, offset=0 }= req.query;
        const articules = await Articulo.find({ hidden: false}, undefined, {
            sort: [{ createdAt: -1}],
            limit: pagination?limit:undefined,
            skip: pagination?offset:undefined 
        }).populate("Usuario", "username correo");
        return res.status(200).json({ articules,
            count: pagination ? await Articulo.countDocuments({hidden: false}): undefined
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
};

controller.findOneById = async(req, res, next)=>{
    try {
        const {id}= req.params;
        const articule = await Articulo.findOne({ _id: id, hidden:false })
            .populate("Usuario", "username correo");
        if(!articule){
            return res.status(404).json({ error: "Articule not found"});
        };
        return res.status(200).json({ articule });
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
};

controller.findByUser = async (req, res, next)=>{
    try {
        const {id}= req.params;
        const { pagination=true, limit=5, offset=0 }= req.query;
        const articules = await Articulo.find({ user: id, hidden: false }, undefined, {
            sort: [{ createdAt: -1}],
            limit: pagination?limit:undefined,
            skip: pagination?offset:undefined 
        }).populate("Usuario", "username correo");
        return res.status(200).json({ articules,
            count: pagination ? await Articulo.countDocuments({hidden: false}): undefined
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
};

controller.findOwn = async (req, res, next)=>{
    try {
        const { _id: userId}= req.user;
        const { pagination=true, limit=5, offset=0 }= req.query;
        const articules = await Articulo.find({ user: userId }, undefined, {
            sort: [{ createdAt: -1}],
            limit: pagination?limit:undefined,
            skip: pagination?offset:undefined 
        }).populate("Usuario", "username correo");
        return res.status(200).json({ articules,
            count: pagination ? await Articulo.countDocuments({hidden: false}): undefined
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
};

controller.findByEtiqueta = async (req, res, next)=>{
    try {
        const {id}= req.params;
        const { pagination=true, limit=5, offset=0 }= req.query;
        const articules = await Articulo.find({ etiquetas: id, hidden: false }, undefined, {
            sort: [{ createdAt: -1}],
            limit: pagination?limit:undefined,
            skip: pagination?offset:undefined 
        }).populate("Usuario", "username correo etiquetas");
        return res.status(200).json({ articules,
            count: pagination ? await Articulo.countDocuments({hidden: false}): undefined
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
};


controller.changeHidden= async(req, res, next)=>{
    try {
        const { id }= req.params;
        const { _id: userId }=req.user;
        const articule = await Articulo.findOne({ _id: id, user: userId })
            .populate("Usuario", "username correo");
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
};

controller.changeDisponibilidad= async(req, res, next)=>{
    try {
        const { id }= req.params;
        const { estado } = req.body;
        const art = await Articulo.findById(id);
        if(!art){
            return res.status(404).json({ error: "Articule not found"})
        };
        art["estado"] = estado;
        const updatedArt = await art.save();
        if(!updatedArt){
            return res.status(500).json({ error: "Articule not updated"})
        }
        return res.status(200).json({ message: "Articule status updated", user: updatedArt });
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
};

controller.deleteOneArticle = async(req, res, next)=>{
    try {
        const {id}= req.params;
        const { user } = req;
        const deletedArticule = await Articulo.findOneAndDelete({ _id: id, user: user._id });
        if(!deletedArticule){
            return res.status(404).json({ error: "Articule not found" });
        }
        return res.status(200).json({ message: "Articule deleted" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
};

module.exports = controller;