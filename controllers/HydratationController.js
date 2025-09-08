const Hydratation = require("../models/HydratationModel");

module.exports.createHydratation = async (req,res) => {
    try {
        const Hydratation = new Hydratation(req.body);
        await Hydratation.save();
        res.status(201).json(Hydratation);
        
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
};

module.exports.getAllHydratation = async (req, res) => {
  try {
    const Hydratation = await Hydratation.find().populate("profilSanteId");
    res.json(Hydratation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.getHydratationById = async (req, res) => {
  try {
    const Hydratation = await Hydratation.findById(req.params.id).populate("profilSanteId");
    if (!Hydratation) return res.status(404).json({ message: "Hydratation non trouvée" });
    res.json(Hydratation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.updateHydratation = async (req , res) =>{
    try {
    const hydratation = await Hydratation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!hydratation) return res.status(404).json({ message: "Hydratation non trouvée" });
    res.json(hydratation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports.deleteHydratation = async (req, res) => {
  try {
    const hydratation = await Hydratation.findByIdAndDelete(req.params.id);
    if (!hydratation) return res.status(404).json({ message: "Hydratation non trouvée" });
    res.json({ message: "Hydratation supprimée avec succès" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



