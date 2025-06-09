const Quarter = require("../models/Quarter");

exports.list = async (req, res) => {
  const quarters = await Quarter.find().sort({ startDate: 1 });
  res.render("pages/admin/quarters/list", { quarters });
};

exports.addForm = (req, res) => {
  res.render("pages/admin/quarters/add");
};

exports.add = async (req, res) => {
  await Quarter.create(req.body);
  res.redirect("/admin/quarters");
};

exports.editForm = async (req, res) => {
  const quarter = await Quarter.findById(req.params.id);
  res.render("pages/admin/quarters/edit", { quarter });
};

exports.update = async (req, res) => {
  await Quarter.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/admin/quarters");
};

exports.delete = async (req, res) => {
  await Quarter.findByIdAndDelete(req.params.id);
  res.redirect("/admin/quarters");
};