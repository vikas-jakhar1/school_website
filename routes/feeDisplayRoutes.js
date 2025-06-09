const express = require("express");
const router = express.Router();
const controller = require("../controllers/feeDisplayController");
const { isAuthenticated } = require("../middleware/authMiddleware");

router.get("/", isAuthenticated, controller.listFees);
router.post("/upload", isAuthenticated, controller.uploadFee);
router.get("/delete/:id", isAuthenticated, controller.deleteFee);

module.exports = router;