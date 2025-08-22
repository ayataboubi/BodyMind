var express = require('express');
var router = express.Router();
const userController= require('../controller')


/* GET home page. */
router.get('/getAllUsers',userController.getAllUsers )
router.get('/getUserById/:id', userController.getUserById)
router.post('/addPation/', userController.addPatient)
router.post('/addAdmin/', userController.addAdmin)



module.exports = router;
