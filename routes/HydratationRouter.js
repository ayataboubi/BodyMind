const express = require("express");
const router = express.Router();
const HydratationController = require("../controllers/HydratationController");

app.use((req, res, next) => {
  console.log("Requête reçue:", req.method, req.url);
  next();
});

router.post("/createHydratation", HydratationController.createHydratation);
router.get("/", HydratationController.getAllHydratation);
router.get("//:id", HydratationController.getHydratationById);
router.put("/:id", HydratationController.updateHydratation);
router.delete("/:id", HydratationController.deleteHydratation);

module.exports = router;