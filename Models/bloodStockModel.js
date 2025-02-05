const mongoose = require("mongoose");

const BloodStockSchema = new mongoose.Schema({
  bloodType: { type: String, required: true, unique: true }, // A+, B-, etc.
  unitsAvailable: { type: Number, required: true }, // Number of units available
  threshold: { type: Number, required: true,default:10 }, // Minimum required units
});

module.exports = mongoose.model("BloodStock", BloodStockSchema);
