const express = require("express");
const router = express.Router();
const multer = require("multer");
const controller = require("../controllers/galleryController");
const { isAuthenticated } = require("../middleware/authMiddleware");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/uploads/gallery"),
  filename: (req, file, cb) => cb(null, Date.now() + "_" + file.originalname)
});

const upload = multer({ storage });

router.get("/", isAuthenticated, controller.listImages);
router.post("/upload", isAuthenticated, upload.single("image"), controller.uploadImage);
router.get("/delete/:id", isAuthenticated, controller.deleteImage);

module.exports = router;