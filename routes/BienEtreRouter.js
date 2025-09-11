const express = require("express");
const router = express.Router();
const BinEtreController = require("../controllers/BienEtreController");

router.post("/createBienEtre", BinEtreController.createBienEtre);
router.get("/", BinEtreController.getAllBienEtre);
router.get("/:id", BinEtreController.getBienEtreById);
router.put("/:id", BinEtreController.updateBienEtre);
router.delete("/:id", BinEtreController.deleteBienEtre);

module.exports = router;
