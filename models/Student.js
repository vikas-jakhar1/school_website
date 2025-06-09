const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  class: String,
  section: String,
  rollNo: Number,
  guardianName: String,
  contactNo: String,
  address: String,
});

module.exports = mongoose.model("Student", studentSchema);