const express = require("express");
const router = express.Router();
const ActiviteController = require("./controllers/ActiviteController");


router.post("/", ActiviteController.createActivite);
router.get("/",ActiviteController,ActiviteController.getAllActivite);
router.get("/:id",ActiviteController.getActiviteById);
router.put("/:id",ActiviteController.updateActivite);
router.delete("/:id", ActiviteController.deleteActivite);


module.exports = router;
