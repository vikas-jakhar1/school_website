const express = require("express");
const router = express.Router();
const classController = require("../controllers/classController");
const { isAuthenticated } = require("../middleware/authMiddleware");

router.get("/", isAuthenticated, classController.list);
router.get("/add", isAuthenticated, classController.addForm);
router.post("/add", isAuthenticated, classController.add);
router.get("/edit/:id", isAuthenticated, classController.editForm);
router.post("/edit/:id", isAuthenticated, classController.update);
router.get("/delete/:id", isAuthenticated, classController.delete);

module.exports = router;