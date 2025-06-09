const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.render("pages/index"));
router.get("/about", (req, res) => res.render("pages/about"));
router.get("/contact", (req, res) => res.render("pages/contact"));
router.get("/gallery", (req, res) => res.render("pages/gallery"));
router.get("/achievements", (req, res) => res.render("pages/achievements"));
router.get("/notice", (req, res) => res.render("pages/notice"));
router.get("/fee", (req, res) => res.render("pages/fee"));

module.exports = router;