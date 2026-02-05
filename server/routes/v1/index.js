const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const projectRoutes = require("./projectRoutes");
const templateRoutes = require("./templateRoutes");
const iconRoutes = require("./iconRoutes");

router.use("/auth", authRoutes);
router.use("/projects", projectRoutes);
router.use("/templates", templateRoutes);
router.use("/icons", iconRoutes);

module.exports = router;
