const express = require("express");
const router = express.Router();
const feeController = require("../controllers/feeController");
const { isAuthenticated } = require("../middleware/authMiddleware");

router.get("/types", isAuthenticated, feeController.listFeeTypes);
router.post("/types", isAuthenticated, feeController.addFeeType);
router.get("/assign", isAuthenticated, feeController.assignForm);
router.post("/assign", isAuthenticated, feeController.assignFees);
router.get("/list", isAuthenticated, feeController.listAssignedFees);
router.get("/mark-paid/:id", isAuthenticated, feeController.markAsPaid);

module.exports = router;