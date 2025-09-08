var express = require('express');
var router = express.Router();
const SommeilController = require('../controllers/SommeilController');


router.post("/createSommeil", SommeilController.createSommeil);
router.get("/", SommeilController.getAllSommeil);
router.get("/:id", SommeilController.getSommeilById);
router.put("/:id", SommeilController.updateSommeil);

router.delete("/:id", SommeilController.deleteSommeil);

module.exports = router;
