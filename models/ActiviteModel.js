const mongoose = require("mongoose");

const activiteSchema = new mongoose.Schema({
  
  date: { type: Date, default: Date.now },
  typeActivite: { type: String, required: true }, // Ex: Marche, Course, Yoga
  duree: { type: Number, required: true }, // minutes
  caloriesBrulees: { type: Number }
},{ versionKey: false });

module.exports = mongoose.model("Activite", activiteSchema);