const mongoose = require("mongoose");

const HydratataionSchema = new mongoose.Schema({
    date:{ type: Date , default: Date.now},
    quantite:{ type: Number , required: true},
    objectif: {type: Number}
  
}
, { versionKey: false });

module.exports=mongoose.model("Hydratation", HydratataionSchema);