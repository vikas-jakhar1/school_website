const mongoose = require("mongoose");

const feeDisplaySchema = new mongoose.Schema({
  className: String,
  admissionFee: Number,
  tuitionFee: Number,
  termFee: Number,
  totalFee: Number,
  note: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("FeeDisplay", feeDisplaySchema);