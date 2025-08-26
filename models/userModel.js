const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
         required:true,
        },

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
    }

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
    
})
const User = mongoose.model('User',userSchema);
module.exports = User 