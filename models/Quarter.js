const mongoose = require("mongoose");

const quarterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  isActive: { type: Boolean, default: false },
});

module.exports = mongoose.model("Quarter", quarterSchema);