const GalleryImage = require("../models/GalleryImage");
const fs = require("fs");
const path = require("path");

exports.listImages = async (req, res) => {
  const images = await GalleryImage.find().sort({ createdAt: -1 });
  res.render("pages/admin/gallery/list", { images });
};

exports.uploadImage = async (req, res) => {
  const { caption } = req.body;
  const image = req.file.filename;
  await GalleryImage.create({ caption, image });
  res.redirect("/admin/gallery");
};

exports.deleteImage = async (req, res) => {
  const img = await GalleryImage.findById(req.params.id);
  if (img) {
    fs.unlink(path.join("public/uploads/gallery/", img.image), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error deleting image");
      }
      img.remove();
      res.redirect("/admin/gallery");
    });
  } else {
    res.redirect("/admin/gallery");
  }
};

exports.viewGalleryPublic = async (req, res) => {
  const images = await GalleryImage.find().sort({ createdAt: -1 });
  res.render("pages/public/gallery", { images });
};