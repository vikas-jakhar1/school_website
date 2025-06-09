const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  name: String,
  tagline: String,
  email: String,
  phone: String,
  address: String,
  sessionYear: String,
});

module.exports = mongoose.model("School", schoolSchema);