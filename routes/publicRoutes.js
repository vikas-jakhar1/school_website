const express = require("express");
const router = express.Router();

const Notice = require("../models/Notice");
const Achievement = require("../models/Achievement");
const SliderImage = require("../models/SliderImage");
const feeDisplayController = require("../controllers/feeDisplayController");
// router.get("/fees", feeDisplayController.viewPublicFees);
// router.get("/achievements", achievementController.viewPublicAchievements);
// const galleryController = require("../controllers/galleryController");
// router.get("/gallery", galleryController.viewGalleryPublic);
// const Slider = require("../models/Slider");
// const sliders = await Slider.find().sort({ createdAt: -1 });
// res.render("pages/public/home", { sliders });


router.get("/", async (req, res) => {
  try {
    const sliderImages = await SliderImage.find({}).limit(5).lean();
    const notices = await Notice.find({}).sort({ date: -1 }).limit(5).lean();
    const achievements = await Achievement.find({}).limit(6).lean();

    res.render("pages/public/home", {
      schoolName: "Adarsh Vidya Mandir Rajapark",
      schoolDescription: "A premier school offering quality education since 1995.",
      sliderImages,
      notices,
      achievements,
      contactEmail: "contact@adarshvidyamandir.in",
      contactPhone: "+91-9876543210"
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;