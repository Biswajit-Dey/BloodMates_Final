const BloodStock = require("../../Models/bloodStockModel");

const bloodStock= async (req, res) => {
    try {
      const { bloodType, unitsAvailable, threshold } = req.body;
      let blood = await BloodStock.findOne({ bloodType });
  
      if (blood) {
        blood.unitsAvailable = unitsAvailable;
        blood.threshold = threshold;
      } else {
        blood = new BloodStock({ bloodType, unitsAvailable, threshold });
      }
  
      await blood.save();
      res.json({ message: "Blood stock updated", blood });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports=bloodStock;