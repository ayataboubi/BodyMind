const ProfilSante = require("../models/ProfilSanteModel");

module.exports.esmFonction= async(req,res)=>{
    try {
        //logique

        res.status(200).json({}) ;
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
};

module.exports.CreateProfilSante = async(req,res)=>{
    try {
        //logique
        const profil = new ProfilSante(req.body);
        await profil.save();
        res.status(200).json(profil);
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
};

module.exports.getAllProfils= async(req,res)=>{
    try {
        //logique
        const profils = await ProfilSante.find().populate("userId");
        res.status(200).json(profils) ;
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
};

module.exports.getProfilById= async(req,res)=>{
    try {
        //logique
        const profil = await ProfilSante.findById(req.parms.id).populate("userId");
        res.status(200).json({}) ;
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
};

module.exports.updateProfil = async(req,res)=>{
    try {
        //logique
        const profil = await ProfilSante.findById(req.params.id).populate("userId");

        res.status(200).json({}) ;
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
};
module.exports.deleteProfil= async(req,res)=>{
    try {
        //logique
        const profil =await ProfilSante.findByIdAndDelete(req.params.id);
        if(!profil){
            throw new Error("user not found")
        }
        res.status(200).json({}) ;
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
};



