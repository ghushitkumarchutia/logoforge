require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");
const corsOptions = require("./config/cors");
const v1Routes = require("./routes/v1");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

connectDB();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    message: "Too many requests, please try again later",
  },
});

// Manual CORS Middleware
app.use((req, res, next) => {
  const origin = req.headers.origin;

  // Allow any origin in development
  if (origin) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else {
    // Optional: Allow non-browser agents or set specific default
    // res.setHeader("Access-Control-Allow-Origin", "*");
  }

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With",
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  next();
});

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use("/api", limiter); // Temporarily disabled for debugging

app.use("/api/v1", v1Routes);

app.get("/health", (req, res) => {
  res.status(200).json({ success: true, message: "Server is running" });
});

app.use(notFound);
app.use(errorHandler);

const PORT = 5001; // Hardcoded to avoid conflict with AirPlay (5000)

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
