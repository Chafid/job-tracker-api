const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { getApplications, createApplication } = require("../controllers/application.controller");

router.get("/", auth, getApplications);
router.post("/", auth, createApplication);

module.exports = router;