const mongoose = require ("mongoose");

const SommeilSchema = new mongoose.Schema({
    date:{type: Date , default : Date.now },

    dureeSommeil : { type: Number , required: true },
    qualiteSommeil : { type : String , enum: ["très bonne","Bonne","Moyenne","Mauvaise"]},

});

module.exports = mongoose.model("Sommeil" , SommeilSchema);