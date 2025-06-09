const express = require("express");
const router = express.Router();
const schoolController = require("../controllers/schoolController");
const { isAuthenticated } = require("../middleware/authMiddleware");

router.get("/", isAuthenticated, schoolController.getForm);
router.post("/", isAuthenticated, schoolController.update);

module.exports = router;