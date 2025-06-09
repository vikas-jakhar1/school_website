const Slider = require("../models/Slider");
const fs = require("fs");
const path = require("path");

exports.listSliders = async (req, res) => {
  const sliders = await Slider.find().sort({ createdAt: -1 });
  res.render("pages/admin/sliders/list", { sliders });
};

exports.uploadSlider = async (req, res) => {
  const { title } = req.body;
  const image = req.file.filename;
  await Slider.create({ title, image });
  res.redirect("/admin/sliders");
};

exports.deleteSlider = async (req, res) => {
  const slider = await Slider.findById(req.params.id);
  if (slider) {
    fs.unlinkSync(path.join("public/uploads/sliders/", slider.image));
    await slider.remove();
  }
  res.redirect("/admin/sliders");
};