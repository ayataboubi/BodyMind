const BienEtre = require("../models/BienEtreModel");

module.exports.createBienEtre = async (req, res) => {
  try {
    const bienEtre = new BienEtre(req.body);
    await bienEtre.save();
    res.status(201).json(bienEtre);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports.getAllBienEtre = async (req, res) => {
  try {
    const bienEtreList = await BienEtre.find().populate("profilSanteId");
    res.json(bienEtreList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.xports.getBienEtreById = async (req, res) => {
  try {
    const bienEtre = await BienEtre.findById(req.params.id).populate("profilSanteId");
    if (!bienEtre) return res.status(404).json({ message: "Enregistrement non trouvé" });
    res.json(bienEtre);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.updateBienEtre = async (req, res) => {
  try {
    const bienEtre = await BienEtre.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!bienEtre) return res.status(404).json({ message: "Enregistrement non trouvé" });
    res.json(bienEtre);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports.deleteBienEtre = async (req, res) => {
  try {
    const bienEtre = await BienEtre.findByIdAndDelete(req.params.id);
    if (!bienEtre) return res.status(404).json({ message: "Enregistrement non trouvé" });
    res.json({ message: "Bien-être supprimé avec succès" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
