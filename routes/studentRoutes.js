const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const { isAuthenticated } = require("../middleware/authMiddleware");

router.get("/", isAuthenticated, studentController.list);
router.get("/add", isAuthenticated, studentController.addForm);
router.post("/add", isAuthenticated, studentController.add);
router.get("/edit/:id", isAuthenticated, studentController.editForm);
router.post("/edit/:id", isAuthenticated, studentController.update);
router.get("/delete/:id", isAuthenticated, studentController.delete);

module.exports = router;