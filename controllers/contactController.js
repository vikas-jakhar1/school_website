const ContactQuery = require("../models/ContactQuery");

// Public: Show form
exports.showForm = (req, res) => {
  res.render("pages/public/contact");
};

// Public: Handle submission
exports.submitQuery = async (req, res) => {
  const { name, email, phone, message } = req.body;
  await ContactQuery.create({ name, email, phone, message });
  res.redirect("/contact?success=true");
};

// Admin: List queries
exports.listQueries = async (req, res) => {
  const queries = await ContactQuery.find().sort({ date: -1 });
  res.render("pages/admin/contacts/list", { queries });
};

// Admin: Delete
exports.deleteQuery = async (req, res) => {
  await ContactQuery.findByIdAndDelete(req.params.id);
  res.redirect("/admin/contacts");
};