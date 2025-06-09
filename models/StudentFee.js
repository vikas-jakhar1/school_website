const mongoose = require("mongoose");

const studentFeeSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  classId: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true },
  quarterId: { type: mongoose.Schema.Types.ObjectId, ref: "Quarter", required: true },
  feeType: { type: mongoose.Schema.Types.ObjectId, ref: "FeeType", required: true },
  status: { type: String, enum: ["Paid", "Unpaid"], default: "Unpaid" },
  paidAt: { type: Date },
});

module.exports = mongoose.model("StudentFee", studentFeeSchema);