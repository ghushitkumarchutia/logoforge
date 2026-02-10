const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const projectRoutes = require("./projectRoutes");
const templateRoutes = require("./templateRoutes");
const iconRoutes = require("./iconRoutes");
const uploadRoutes = require("./uploadRoutes");

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/projects", projectRoutes);
router.use("/templates", templateRoutes);
router.use("/icons", iconRoutes);
router.use("/upload", uploadRoutes);

module.exports = router;
