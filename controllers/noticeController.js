const Notice = require("../models/Notice");

exports.listNotices = async (req, res) => {
  const notices = await Notice.find().sort({ date: -1 });
  res.render("pages/admin/notices/list", { notices });
};

exports.renderForm = (req, res) => {
  res.render("pages/admin/notices/form", { notice: {} });
};

exports.createNotice = async (req, res) => {
  const { title, content, isActive } = req.body;
  await Notice.create({ title, content, isActive: isActive === "on" });
  res.redirect("/admin/notices");
};

exports.editForm = async (req, res) => {
  const notice = await Notice.findById(req.params.id);
  res.render("pages/admin/notices/form", { notice });
};

exports.updateNotice = async (req, res) => {
  const { title, content, isActive } = req.body;
  await Notice.findByIdAndUpdate(req.params.id, {
    title,
    content,
    isActive: isActive === "on"
  });
  res.redirect("/admin/notices");
};

exports.deleteNotice = async (req, res) => {
  await Notice.findByIdAndDelete(req.params.id);
  res.redirect("/admin/notices");
};

// Public: show active notices
exports.showActiveNotices = async (req, res) => {
  const notices = await Notice.find({ isActive: true }).sort({ date: -1 });
  res.render("pages/public/partials/_notices", { notices });
};