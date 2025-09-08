const Sommeil = require("../models/SommeilModel");

// Ajouter un enregistrement de sommeil
module.exports.createSommeil = async (req, res) => {
  try {
    const sommeil = new Sommeil(req.body);
    await sommeil.save();
    res.status(201).json(sommeil);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// Récupérer toutes les nuits de sommeil
module.exports.getAllSommeil = async (req, res) => {
  try {
    const sommeils = await Sommeil.find().populate("profilSanteId");
    res.json(sommeils);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports.getSommeilById = async (req, res) => {
  try {
    const sommeil = await Sommeil.findById(req.params.id).populate("profilSanteId");
    if (!sommeil) return res.status(404).json({ message: "Enregistrement non trouvé" });
    res.json(sommeil);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports.updateSommeil = async (req, res) => {
  try {
    const sommeil = await Sommeil.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!sommeil) return res.status(404).json({ message: "Enregistrement non trouvé" });
    res.json(sommeil);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
module.exports.deleteSommeil = async (req, res) => {
  try {
    const sommeil = await Sommeil.findByIdAndDelete(req.params.id);
    if (!sommeil) return res.status(404).json({ message: "Enregistrement non trouvé" });
    res.json({ message: "Sommeil supprimé avec succès" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};