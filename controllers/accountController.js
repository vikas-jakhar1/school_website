const StudentFee = require("../models/StudentFee");
const Student = require("../models/Student");
const Class = require("../models/Class");
const FeeType = require("../models/FeeType");

exports.dashboard = async (req, res) => {
  const totalAssigned = await StudentFee.countDocuments();
  const totalCollected = await StudentFee.countDocuments({ status: "Paid" });
  const totalUnpaid = totalAssigned - totalCollected;

  const totalRevenue = await StudentFee.aggregate([
    { $match: { status: "Paid" } },
    {
      $lookup: {
        from: "feetypes",
        localField: "feeType",
        foreignField: "_id",
        as: "feeTypeDetails",
      },
    },
    { $unwind: "$feeTypeDetails" },
    { $group: { _id: null, total: { $sum: "$feeTypeDetails.amount" } } },
  ]);

  res.render("pages/admin/account/dashboard", {
    totalAssigned,
    totalCollected,
    totalUnpaid,
    totalRevenue: totalRevenue[0]?.total || 0,
  });
};

exports.transactionLog = async (req, res) => {
  const paidFees = await StudentFee.find({ status: "Paid" })
    .populate("student feeType classId quarterId")
    .sort({ paidAt: -1 });

  res.render("pages/admin/account/transactions", { paidFees });
};