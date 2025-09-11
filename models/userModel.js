const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const SommeilModel = require("./SommeilModel");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
         required:true,
        },
    ProfilSante: { type: mongoose.Schema.Types.ObjectId, ref: "ProfilSante" }, // relation 1-1


    email:{
        type: String,
        required:true,
        unique : true ,
        lowercase:false,
        match:[/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
        },

    password:{
        type: String,
        required:true,
        minLength:6  
        },
    role:{
        type: String, 
        enum: ["Patient", "admin"],
        default: "Patient"
         }, 
    image_User:{
         type: String,
         default: "Patient.png",
         },
    age :{
        type: Number,
    },
    statu: {
        type: Boolean,
        default:false
    },
    isDeleted:{
        type: Boolean,
        default:false
    },
    isbloked:{
        type:Boolean,
        default:false
    },
    profilSante: { type: mongoose.Schema.Types.ObjectId, ref: "ProfilSante" },
    SommeilModel: { type: mongoose.Schema.Types.ObjectId, ref: "SommeilSante" },
    HydratationModel: { type: mongoose.Schema.Types.ObjectId, ref: "HydratationModel" },
    BienEtreModel: { type: mongoose.Schema.Types.ObjectId, ref: "BienEtreModel" },
    ActiviteModel: { type: mongoose.Schema.Types.ObjectId, ref: "ActiviteModel" },




    


},
    { timestamps: true }
); 

userSchema.pre('save',async function (next) {
    try {
        const salt = await bcrypt.genSalt();
        const User = this ;
        User.password=await bcrypt.hash(User.password ,salt);
        // User.statu= false 
        next(); 
    } catch (error) {
      next(error)     
    }
    
},
{ versionKey: false })
const User = mongoose.model('User',userSchema);
module.exports = User 