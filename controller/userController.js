const userModel = require('../models/userModel')

module.exports.esmFonction= async(req,res)=>{
    try {
        //logique
        res.status(200).json({}) ;
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
};

module.exports.getAllUsers = async(req,res)=>{
    try {
        //logique
        const UserList = await userModel.find()
        res.status(200).json({UserList});

    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
};

module.exports.getUserById = async(req,res)=>{
    try {
        //logique
        //const id = req.body;
        const {id} = req.params;
        //const id = req.query; 
        
        const UserList = await userModel.findById(id)
        res.status(200).json({UserList});

    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
};

module.exports.addPatient= async(req,res)=>{
    try {
        //logique
        const { username, email,password , age}=req.body 
        const role ='Patient'
        const Patient = new userModel({username, email,password , age , role})
        // const Patient = new userModel(req.body)
        const addUser =await Patient.save()
        res.status(200).json({message : "Patient ajouté avec succès",addPatient}) ;
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
};

module.exports.addAdmin= async(req,res)=>{
    try {
        //logique
        const { username, email,password }=req.body 
        const role ='Admin'
        const Admin = new userModel({username, email,password  , role})
        // const Admin = new userModel(req.body)
        const addUser =await Admin.save()
        res.status(200).json({message :"Admin ajouté avec succès", addAdmin}) ;
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
};