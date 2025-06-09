const Achievement = require("../models/Achievement");
const fs = require("fs");
const path = require("path");

exports.listAchievements = async (req, res) => {
  const achievements = await Achievement.find().sort({ createdAt: -1 });
  res.render("pages/admin/achievements/list", { achievements });
};

exports.uploadAchievement = async (req, res) => {
  const { title, description } = req.body;
  const image = req.file ? req.file.filename : "";
  await Achievement.create({ title, description, image });
  res.redirect("/admin/achievements");
};

exports.deleteAchievement = async (req, res) => {
  const ach = await Achievement.findById(req.params.id);
  if (ach) {
    if (ach.image) {
      fs.unlinkSync(path.join("public/uploads/achievements/", ach.image));
    }
    await ach.remove();
  }
  res.redirect("/admin/achievements");
};

exports.viewPublicAchievements = async (req, res) => {
  const achievements = await Achievement.find().sort({ createdAt: -1 });
  res.render("pages/public/achievements", { achievements });
};