const FeeType = require("../models/FeeType");
const StudentFee = require("../models/StudentFee");
const Student = require("../models/Student");
const Class = require("../models/Class");
const Quarter = require("../models/Quarter");

exports.listFeeTypes = async (req, res) => {
  const feeTypes = await FeeType.find();
  res.render("pages/admin/fees/types", { feeTypes });
};

exports.addFeeType = async (req, res) => {
  await FeeType.create(req.body);
  res.redirect("/admin/fees/types");
};

exports.assignForm = async (req, res) => {
  const classes = await Class.find();
  const quarters = await Quarter.find();
  const feeTypes = await FeeType.find();
  res.render("pages/admin/fees/assign", { classes, quarters, feeTypes });
};

exports.assignFees = async (req, res) => {
  const { classId, quarterId, feeTypeId } = req.body;
  const students = await Student.find({ classId });

  for (const student of students) {
    await StudentFee.create({
      student: student._id,
      classId,
      quarterId,
      feeType: feeTypeId,
    });
  }

  res.redirect("/admin/fees/list");
};

exports.listAssignedFees = async (req, res) => {
  const assignedFees = await StudentFee.find()
    .populate("student feeType classId quarterId");
  res.render("pages/admin/fees/list", { assignedFees });
};

exports.markAsPaid = async (req, res) => {
  await StudentFee.findByIdAndUpdate(req.params.id, {
    status: "Paid",
    paidAt: new Date(),
  });
  res.redirect("/admin/fees/list");
};