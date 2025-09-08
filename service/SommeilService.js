const SommeilModel = require ("../models/SommeilModels");

module.exports.getData = async () =>{
    try {
        const SommeilList= await SommeilModel.find() 
        return  SommeilList 
     }
    catch (error) {
         throw new Error (' Erreur lors de la récuperrationdes osInformation');
    }
} 