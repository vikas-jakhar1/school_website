const bcrypt = require('bcryptjs');
const Admin = require("../models/Admin");

// GET login page
exports.getLogin = (req, res) => {
  res.render("pages/admin/login", { error: null });
};

// POST login
exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });

  if (!admin) return res.render("pages/admin/login", { error: "Invalid credentials" });

  const match = await bcrypt.compare(password, admin.password);
  if (!match) return res.render("pages/admin/login", { error: "Invalid credentials" });

  req.session.admin = admin._id;
  res.redirect("/admin/dashboard");
};

// GET logout
exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/admin/login");
  });
};

// GET dashboard
exports.dashboard = (req, res) => {
  res.render("pages/admin/dashboard");
};