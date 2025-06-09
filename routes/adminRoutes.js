const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");
const contactController = require("../controllers/contactController");
const { isAuthenticated } = require("../middleware/authMiddleware");

// Admin authentication routes
router.get("/login", adminController.getLogin);
router.post("/login", adminController.postLogin);
router.get("/logout", adminController.logout);

// Admin dashboard
router.get("/dashboard", isAuthenticated, adminController.dashboard);

// Contact management
router.get("/contacts", isAuthenticated, contactController.listQueries);
router.get("/contacts/delete/:id", isAuthenticated, contactController.deleteQuery);

// Nested admin routes
router.use("/students", require("./studentRoutes"));
router.use("/school", require("./schoolRoutes"));
router.use("/classes", require("./classRoutes"));
router.use("/quarters", require("./quarterRoutes"));
router.use("/fees", require("./feeRoutes"));
router.use("/account", require("./accountRoutes"));
router.use("/pending-fees", require("./pendingFeesRoutes"));
router.use("/notices", require("./noticeRoutes"));
router.use("/reports", require("./reportRoutes"));
router.use("/sliders", require("./sliderRoutes"));
router.use("/gallery", require("./galleryRoutes"));
router.use("/achievements", require("./achievementRoutes"));
router.use("/fee-display", require("./feeDisplayRoutes"));

module.exports = router;