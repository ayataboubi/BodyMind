const userModel = require ("../models/ProfilSanteModel");

module.exports.getData = async () =>{
    try {
        const ProfilSanteList= await ProfilSante.find() 
        return  ProfilSanteList  
     }
    catch (error) {
         throw new Error (' Erreur lors de la récuperrationdes osInformation');
    }
}      