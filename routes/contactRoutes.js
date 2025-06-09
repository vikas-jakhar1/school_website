const express = require("express");
const router = express.Router();
const controller = require("../controllers/contactController");

router.get("/contact", controller.showForm);
router.post("/contact", controller.submitQuery);

module.exports = router;