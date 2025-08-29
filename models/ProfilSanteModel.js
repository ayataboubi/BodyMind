const mongoose = require("mongoose");

const ProfillSanteSchema = new mongoose.Schema({
     userId: {type : Number},
      age : {type : Number},
      sexe :{type : String , enum:["Homme" , "Femme"]},
      taille :{type : Number},
      poids : {type : Number},
      
      objectifPoids: { type: Number},
      objectifCalories: {type: Number},
      objectifHydratation :{type: Number},
      objectifActivite:{type: Number},

});

module.exports = mongoose.model("ProfilSante", ProfillSanteSchema);