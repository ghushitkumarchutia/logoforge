const express = require("express");
const router = express.Router();
const { getIcons } = require("../../controllers/iconController");

router.get("/", getIcons);

module.exports = router;
