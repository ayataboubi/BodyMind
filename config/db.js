const mongoose = require("mongoose")

module.exports.connecttoMongoDb = async () => {
     mongoose.set('strictQuery', false);
     mongoose.connect(process.env.Url_Mongo ).then(
        ()=>{console.log("connect to db")}
    ).catch(
        (error)=>{console.log(error)}
    )
}

//nom: ayataboubi
//mp: Lnuy381Y7du1brAv
