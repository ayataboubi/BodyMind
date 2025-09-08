const mongoose = require("mongoose");

const HydrataionSchema = new mongoose.Schema({
    date:{type : Date , default: Date.now},
    quantite:{type: Number , required: true},
    objectif: {type: Number}
});

module.exports=mongoose.model("Hydratation",HydrataionSchema);