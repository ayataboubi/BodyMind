const express = require("express");
const router = express.Router();
const HydratationController = require("../controllers/HydratationController");



router.post("/createHydratation", HydratationController.createHydratation);
router.get("/", HydratationController.getAllHydratation);
router.get("/:id", HydratationController.getHydratationById);
router.put("/:id", HydratationController.updateHydratation);
router.delete("/:id", HydratationController.deleteHydratation);

module.exports = router;