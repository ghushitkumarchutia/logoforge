const express = require("express");
const router = express.Router();
const {
  getIcons,
  getIconsByCategory,
} = require("../../controllers/iconController");

router.get("/", getIcons);
router.get("/category/:category", getIconsByCategory);

module.exports = router;
