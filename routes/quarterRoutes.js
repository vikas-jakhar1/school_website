const express = require("express");
const router = express.Router();
const quarterController = require("../controllers/quarterController");
const { isAuthenticated } = require("../middleware/authMiddleware");

router.get("/", isAuthenticated, quarterController.list);
router.get("/add", isAuthenticated, quarterController.addForm);
router.post("/add", isAuthenticated, quarterController.add);
router.get("/edit/:id", isAuthenticated, quarterController.editForm);
router.post("/edit/:id", isAuthenticated, quarterController.update);
router.get("/delete/:id", isAuthenticated, quarterController.delete);

module.exports = router;