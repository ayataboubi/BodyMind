// const mongoose = require("mongoose")

// module.exports.connecttoMongoDb = async () => {
//      mongoose.set('strictQuery', false);
//      mongoose.connect(process.env.Url_Mongo ).then(
//         ()=>{console.log("connect to db")}
//     ).catch(
//         (error)=>{console.log(error)}
//     )
// }

//nom: ayataboubi
//mp: Lnuy381Y7du1brAv
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/ISSAM", {
    useNewUrlParser: true,
    
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));