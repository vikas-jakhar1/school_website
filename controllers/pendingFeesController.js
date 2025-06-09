const StudentFee = require("../models/StudentFee");
const Class = require("../models/Class");
const Quarter = require("../models/Quarter");
const FeeType = require("../models/FeeType");
const Student = require("../models/Student");

exports.filterForm = async (req, res) => {
  const classes = await Class.find();
  const quarters = await Quarter.find();
  res.render("pages/admin/fees/pending", {
    classes,
    quarters,
    unpaidFees: [],
    selectedClass: null,
    selectedQuarter: null
  });
};

exports.showUnpaid = async (req, res) => {
  const { classId, quarterId } = req.body;
  const classes = await Class.find();
  const quarters = await Quarter.find();

  const unpaidFees = await StudentFee.find({
    classId,
    quarterId,
    status: "Unpaid"
  }).populate("student feeType");

  res.render("pages/admin/fees/pending", {
    classes,
    quarters,
    unpaidFees,
    selectedClass: classId,
    selectedQuarter: quarterId
  });
};

exports.bulkMarkPaid = async (req, res) => {
  const ids = req.body.feeIds;
  if (Array.isArray(ids)) {
    await StudentFee.updateMany(
      { _id: { $in: ids } },
      { $set: { status: "Paid", paidAt: new Date() } }
    );
  } else if (ids) {
    await StudentFee.findByIdAndUpdate(ids, { status: "Paid", paidAt: new Date() });
  }
  res.redirect("back");
};