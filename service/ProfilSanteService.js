const ProfilSanteModel = require("../models/ProfilSanteModel");
const ProfilSante = require ("../models/ProfilSanteModel");

module.exports.getData = async () =>{
    try {
        const ProfilSanteList= await ProfilSanteModel.find() 
        return  ProfilSanteList  
     }
    catch (error) {
         throw new Error (' Erreur lors de la récuperrationdes osInformation');
    }
}      