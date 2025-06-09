const express = require("express");
const router = express.Router();
const multer = require("multer");
const controller = require("../controllers/achievementController");
const { isAuthenticated } = require("../middleware/authMiddleware");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/uploads/achievements"),
  filename: (req, file, cb) => cb(null, Date.now() + "_" + file.originalname)
});

const upload = multer({ storage });

router.get("/", isAuthenticated, controller.listAchievements);
router.post("/upload", isAuthenticated, upload.single("image"), controller.uploadAchievement);
router.get("/delete/:id", isAuthenticated, controller.deleteAchievement);

module.exports = router;