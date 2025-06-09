const express = require("express");
const router = express.Router();
const controller = require("../controllers/noticeController");
const { isAuthenticated } = require("../middleware/authMiddleware");

router.get("/", isAuthenticated, controller.listNotices);
router.get("/new", isAuthenticated, controller.renderForm);
router.post("/new", isAuthenticated, controller.createNotice);
router.get("/edit/:id", isAuthenticated, controller.editForm);
router.post("/edit/:id", isAuthenticated, controller.updateNotice);
router.get("/delete/:id", isAuthenticated, controller.deleteNotice);

module.exports = router;