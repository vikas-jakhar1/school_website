const School = require("../models/School");

exports.getForm = async (req, res) => {
  let school = await School.findOne();
  if (!school) school = await School.create({}); // create default if not exists
  res.render("pages/admin/school/edit", { school });
};

exports.update = async (req, res) => {
  let school = await School.findOne();
  if (!school) school = await School.create(req.body);
  else await School.updateOne({}, req.body);
  res.redirect("/admin/school");
};