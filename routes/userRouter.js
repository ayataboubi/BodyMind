var express = require('express');
var router = express.Router();
const userController= require('../controllers/userController')
const uploadfile = require ('../middlewares/uploadFile')

/* GET home page. */
router.get('/getAllUsers',userController.getAllUsers )
router.get('/getOrderUsersByAge',userController.getOrderUsersByAge )
router.get('/searchUsersByUserName',userController.searchUsersByName )
router.get('/getUserByAge/:age',userController.getUserByAge )
router.get('/getUserByAgeBetweenXAndY',userController.getUserByAgeBetweenXAndY)
router.get('/getUserById/:id', userController.getUserById)
router.post('/addPation/', userController.addPatient)
router.post('/addPatientWithFile',uploadfile.single("image_User") ,userController.addPatientWithFile)
router.post('/addAdmin/', userController.addAdmin) 
router.delete('/DeletUserById/:id', userController.DeletUserById) 



module.exports = router;
