const mongoose = require("mongoose");

const sliderImageSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  title: String,
  description: String
});

module.exports = mongoose.model("SliderImage", sliderImageSchema);