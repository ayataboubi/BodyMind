const express = require("express");
const router = express.Router();
const ProfillSanteController = require("../controllers/ProfilSanteController");

router.post('/CreateProfilSante', ProfillSanteController.CreateProfilSante);
router.get('/getAllProfils', ProfillSanteController.getAllProfils);
router.get('/getProfilById', ProfillSanteController.getProfilById);
router.put("/:id" ,ProfillSanteController.updateProfil);
router.delete(":id",ProfillSanteController.deleteProfil);

module.exports = router ;

