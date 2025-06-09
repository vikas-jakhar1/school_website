const Student = require("../models/Student");

exports.list = async (req, res) => {
  const students = await Student.find().sort({ class: 1 });
  res.render("pages/admin/students/list", { students });
};

exports.addForm = (req, res) => {
  res.render("pages/admin/students/add");
};

exports.add = async (req, res) => {
  await Student.create(req.body);
  res.redirect("/admin/students");
};

exports.editForm = async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.render("pages/admin/students/edit", { student });
};

exports.update = async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/admin/students");
};

exports.delete = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect("/admin/students");
};