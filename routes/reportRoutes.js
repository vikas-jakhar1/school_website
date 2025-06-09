const express = require("express");
const router = express.Router();
const controller = require("../controllers/reportController");
const { isAuthenticated } = require("../middleware/authMiddleware");

router.get("/", isAuthenticated, controller.renderReports);
router.post("/generate", isAuthenticated, controller.generateReport);

module.exports = router;