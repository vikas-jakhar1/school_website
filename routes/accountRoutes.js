const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController");
const { isAuthenticated } = require("../middleware/authMiddleware");

router.get("/", isAuthenticated, accountController.dashboard);
router.get("/transactions", isAuthenticated, accountController.transactionLog);

module.exports = router;