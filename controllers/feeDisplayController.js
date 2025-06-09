const FeeDisplay = require("../models/FeeDisplay");

exports.listFees = async (req, res) => {
  const fees = await FeeDisplay.find().sort({ className: 1 });
  res.render("pages/admin/fee-display/list", { fees });
};

exports.uploadFee = async (req, res) => {
  const { className, admissionFee, tuitionFee, termFee, note } = req.body;
  const totalFee = parseFloat(admissionFee) + parseFloat(tuitionFee) + parseFloat(termFee);
  await FeeDisplay.create({ className, admissionFee, tuitionFee, termFee, totalFee, note });
  res.redirect("/admin/fee-display");
};

exports.deleteFee = async (req, res) => {
  await FeeDisplay.findByIdAndDelete(req.params.id);
  res.redirect("/admin/fee-display");
};

exports.viewPublicFees = async (req, res) => {
  const fees = await FeeDisplay.find().sort({ className: 1 });
  res.render("pages/public/fees", { fees });
};