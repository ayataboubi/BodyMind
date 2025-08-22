var express = require('express');
var router = express.Router();
//const os = require('os')
const osController= require('../controller/osController')
/* GET home page. */
router.get('/getOsInformation', osController.getOsInformation ) 
//    try {
//        const osInformation={ 
//            hostaname : os.hostname(),
//            platform : os.platform(),
//            type : os.type(),
//            release : os.release(),

//        }
//        res.status(200).json("osInformation")
//     } catch (error) {
//        res.status(500).json({message: error.message})
    
//   res.json('respond with a resource ');
// });

module.exports = router;
