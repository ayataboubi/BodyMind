const BienEtreModel = require("../models/BienEtreModel");
const BienEtre = require ("../models/BienEtreModel");

module.exports.getData = async () =>{
    try {
        const bienEtreList= await BienEtreModel.find() 
        return  bienEtreList  
     }
    catch (error) {
         throw new Error (' Erreur lors de la récuperrationdes osInformation');
    }
}      