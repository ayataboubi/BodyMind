const userModel = require('../models/userModel');

module.exports.esmFonction= async(req,res)=>{
    try {
        //logique

        res.status(200).json({}) ;
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
};

module.exports.getAllUsers = async(req,res)=>{
    try {
        //logique
        const UserList = await userModel.find()
        console.log(UserList)
        if (UserList) {
        res.status(200).json({UserList});
          
        } else {
          res.json('no user has been found')
        }

    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
};
module.exports.getOrderUsersByAge = async (req, res) =>{
  try {
    //logique
    const UserList = await userModel.find().sort({age: 1}).limit(4)

    res.status(200).json({UserList});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.getUserByAge = async (req, res) => {
  try {
    //logique
    const age = req.params.age
    const UserList = await userModel.find({age : age})

    if(UserList.length == 0){
      throw new Error("User not Found !");
    }

    res.status(200).json({UserList});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getUserByAgeBetweenXAndY = async (req, res) => {
  try {
    //logique
    const { minAge, maxAge } = req.body;
    console.log(req.body);
    if (isNaN(minAge) || isNaN(maxAge)) {
      throw new Error("Not Null !");
    }
    if (minAge > maxAge) {
      throw new Error("minAge < maxAge !");
    }
    const UserList = await userModel
      .find({ age: { $gte: minAge, $lte: maxAge } })
      .sort({ age: 1 });
 
    if (UserList.length == 0) {
      throw new Error("User not Found !");
    }

    res.status(200).json({ UserList });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getUserById = async(req,res)=>{
    try {
        //logique
        //const id = req.body;
        const id = req.params.id ;
        //const id = req.query; 
        
        const UserList = await userModel.findById(id)
        res.status(200).json({UserList});

    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
};

module.exports.addPatient= async(req,res)=>{
    try {
        //logique
        const { username, email, password , age }=req.body 
        const role ='Patient'
        const Patient = new userModel({username, email,password , age , role})
        // const Patient = new userModel(req.body)
        const addUser = await Patient.save()
        res.json({message : "Patient ajouté avec succès","data" : addUser}) ;
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
};

module.exports.addAdmin= async(req,res)=>{
    try {
        //logique
        const { username, email,password }=req.body 
        const role ='Admin'
        const Admin = new userModel({username, email,password  , role})
        // const Admin = new userModel(req.body)
        const addUser =await Admin.save()
        res.status(200).json({message :"Admin ajouté avec succès", addAdmin}) ;
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
};

module.exports.DeleteUserById = async(req,res)=>{
    try {
        //logique
        //const id = req.body;
        const id = req.params.id
        const checkIfUserExists =await userModel.findById(id);
        if(!checkIfUserExists){
            throw new Error("user not found")
        }
        //const id = req.query; 
         await userModel.findByIdAndDelete(id)
        res.status(200).json("deleted");

    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
};
module.exports.searchUsersByName = async (req, res) => {
  // ?name=John
  try {
    const { username } = req.body;

    if (!username) {
      throw new Error("Please select a name");
    }

    const userList = await userModel.find({
      username: { $regex: username, $options: "i" }, // Debut
      //firstName: {$regex : `${name}$` , $options: "i" } Fin
    });

    if (userList.length === 0) {
      throw new Error("Aucune Utilisateur trouve pour ce nom");
    }

    res.status(200).json({ userList });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// module.exports.addPatientWithFile= async(req,res)=>{
//     try {
//         //logique
//         // const { username, email,password , age}=req.body 
//         const userData  ={...req.body}
//         if(req.file){
//           const {filename}=req.file;
//           userData.image_User = filename
//           userData.role = "Patient"

//         }
//         console.log("userData",userData)
//         const Patient = new userModel(userData)
//         // const Patient = new userModel(req.body)
//         const addUser =await Patient.save()
//         res.status(200).json({message : "Patient ajouté avec succès",addPatient}) ;
//     } catch (error) {
//         res.status(500).json({message: error.message}); 
//     }
// };

module.exports.updateUser= async(req,res)=>{
    try {
        //logique
        const id = req.params.id
        const { username , age }=req.body 
        const updateUser = await userModel.findByIdAndUpdate(id,{$set :{username , age },
         });    
         // const Patient = new userModel(req.body)
        res.status(200).json(updateUser) ;
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
};

const bcrypt = require("bcryptjs");

module.exports.updatePassword= async(req,res)=>{
    try {
        //logique
        const id = req.params.id;
        const { password }=req.body;

        const salt = await bcrypt.genSalt();
        passwordHashed = await bcrypt.hash(password , salt);
        const updatedUser = await userModel.findByIdAndUpdate(id,
          {$set :{password : passwordHashed },
        });    
         // const Patient = new userModel(req.body)
        res.status(200).json(updateUser) ;
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
};

module.exports.updateRoleByAdminToAdmin = async(req,res)=>{
    try {
        //logique
        const id = req.params.id;
        
        const updatedUser = await userModel.findByIdAndUpdate(id,
          {$set :{role : "admin" },
        });    
         // const Patient = new userModel(req.body)
        res.status(200).json(updateUser) ;
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
};