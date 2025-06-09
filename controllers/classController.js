const Class = require("../models/Class");

exports.list = async (req, res) => {
  const classes = await Class.find().sort({ className: 1 });
  res.render("pages/admin/classes/list", { classes });
};

exports.addForm = (req, res) => {
  res.render("pages/admin/classes/add");
};

exports.add = async (req, res) => {
  await Class.create(req.body);
  res.redirect("/admin/classes");
};

exports.editForm = async (req, res) => {
  const cls = await Class.findById(req.params.id);
  res.render("pages/admin/classes/edit", { cls });
};

exports.update = async (req, res) => {
  await Class.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/admin/classes");
};

exports.delete = async (req, res) => {
  await Class.findByIdAndDelete(req.params.id);
  res.redirect("/admin/classes");
};