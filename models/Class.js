const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  className: { type: String, required: true, unique: true },
  description: String,
});

module.exports = mongoose.model("Class", classSchema);