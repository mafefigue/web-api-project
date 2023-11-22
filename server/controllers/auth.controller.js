const User = require("../models/usuario.model");

const controller = {};

controller.register = async(req, res, next)=>{
    try {
        const { username, email, password }= req.body;
        const user = await User.findOne({ $or:[{username: username}, {email: email}] });
        if(user){
            return res.status(409).json({ error: "User already exists!"})
        }
        const newUser = new User({
            username: username, 
            correo: email, 
            contrasenia: password
        });
        await newUser.save();
        return res.status(201).json({ message: "User registered" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
}

module.exports = controller;