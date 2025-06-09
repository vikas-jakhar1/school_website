const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema({
  title: String,
  image: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Slider", sliderSchema);