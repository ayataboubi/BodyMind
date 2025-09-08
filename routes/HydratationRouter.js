const express = require("express");
const router = express.Router();
const hydratationController = require("../controllers/HydratationController");

router.post("/", hydratationController.createHydratation);
router.get("/", hydratationController.getAllHydratation);
router.get("/:id", hydratationController.getHydratationById);
router.put("/:id", hydratationController.updateHydratation);
router.delete("/:id", hydratationController.deleteHydratation);

module.exports = router;