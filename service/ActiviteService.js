const ActiviteModel = require("../models/ActiviteModel");
const ActiviteController = require ("../models/ActiviteModel");

module.exports.getData = async () =>{
    try {
        const ActiviteList= await ActiviteModel.find() 
        return  ActiviteList  
     }
    catch (error) {
         throw new Error (' Erreur lors de la récuperrationdes osInformation');
    }
}    