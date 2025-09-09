const Hydratation = require("../models/HydratationModel");

module.exports.createHydratation = async (req, res) => {
    try {
       console.log("recu body:", req.body);
        const hydratation = new Hydratation(req.body);
        await hydratation.save();
        res.status(201).json(Hydratation);
        
    } catch (error) {
      console.log("errur de create Hydratation",error.message);
        res.status(400).json({message: error.message});
        
    }
};

module.exports.getAllHydratation = async (req, res) => {
  try {
    const hydratation = await Hydratation.find().populate("profilSanteId");
    res.json(hydratation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.getHydratationById = async (req, res) => {
  try {
    const hydratation = await Hydratation.findById(req.params.id).populate("profilSanteId");
    if (!hydratation) return res.status(404).json({ message: "Hydratation non trouvée" });
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



