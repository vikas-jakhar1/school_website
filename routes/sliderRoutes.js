const express = require("express");
const router = express.Router();
const multer = require("multer");
const controller = require("../controllers/sliderController");
const { isAuthenticated } = require("../middleware/authMiddleware");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/uploads/sliders"),
  filename: (req, file, cb) => cb(null, Date.now() + "_" + file.originalname)
});

const upload = multer({ storage });

router.get("/", isAuthenticated, controller.listSliders);
router.post("/upload", isAuthenticated, upload.single("image"), controller.uploadSlider);
router.get("/delete/:id", isAuthenticated, controller.deleteSlider);

module.exports = router;