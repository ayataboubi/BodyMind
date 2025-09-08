const Activite = require("../models/ActiviteModel");

module.exports.createActivite = async (req, res) => {
  try {
    const activite = new Activite(req.body);
    await activite.save();
    res.status(201).json(activite);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports.getAllActivite = async (req, res) => {
  try {
    const activites = await Activite.find().populate("profilSanteId");
    res.json(activites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.getActiviteById = async (req, res) => {
  try {
    const activite = await Activite.findById(req.params.id).populate("profilSanteId");
    if (!activite) return res.status(404).json({ message: "Activité non trouvée" });
    res.json(activite);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.updateActivite = async (req, res) => {
  try {
    const activite = await Activite.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!activite) return res.status(404).json({ message: "Activité non trouvée" });
    res.json(activite);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports.deleteActivite = async (req, res) => {
  try {
    const activite = await Activite.findByIdAndDelete(req.params.id);
    if (!activite) return res.status(404).json({ message: "Activité non trouvée" });
    res.json({ message: "Activité supprimée avec succès" });
} catch (err) {
    res.status(500).json({ message: err.message });
  }
};