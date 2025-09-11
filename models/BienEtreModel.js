const mongoose = require("mongoose");

const BienEtreSchema = new mongoose.Schema({
  
  date: { type: Date, default: Date.now },
  humeur: { type: String, enum: ["Très heureux", "Heureux", "Neutre", "Stressé", "Triste"] },
  niveauStress: { type: Number, min: 0, max: 10 }, // 0 = relax, 10 = stress max
  energie: { type: Number, min: 0, max: 10 }, // niveau d’énergie
  commentaire: { type: String }
},
{ versionKey: false });

module.exports = mongoose.model("BienEtre", BienEtreSchema);