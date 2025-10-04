const express = require("express");
const multer = require("multer");
const { createProfile } = require("../controllers/profileController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// POST /profile → accepts either JSON or file
router.post("/", upload.single("file"), createProfile);

module.exports = router;
