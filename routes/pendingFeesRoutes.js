const express = require("express");
const router = express.Router();
const controller = require("../controllers/pendingFeesController");
const { isAuthenticated } = require("../middleware/authMiddleware");

router.get("/", isAuthenticated, controller.filterForm);
router.post("/", isAuthenticated, controller.showUnpaid);
router.post("/mark-paid", isAuthenticated, controller.bulkMarkPaid);

module.exports = router;