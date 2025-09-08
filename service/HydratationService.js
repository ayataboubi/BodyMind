const HydratationModel = require ("../models/HydratationModel");

module.exports.getData = async () =>{
    try {
        const HydrataionList= await HydratationModel.find() 
        return  HydrataionList  
     }
    catch (error) {
         throw new Error (' Erreur lors de la récuperrationdes osInformation');
    }
}      