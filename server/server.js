require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const corsOptions = require("./config/cors");
const v1Routes = require("./routes/v1");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    message: "Too many requests, please try again later",
  },
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: {
    success: false,
    message: "Too many auth attempts, please try again later",
  },
});

app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/v1/auth", authLimiter);
app.use("/api", limiter);

app.use("/api/v1", v1Routes);

app.get("/health", (req, res) => {
  res.status(200).json({ success: true, message: "Server is running" });
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5001;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`,
      );
    });
  } catch (error) {
    console.error(`Failed to start server: ${error.message}`);
    process.exit(1);
  }
};

const gracefulShutdown = async (signal) => {
  console.log(`\n${signal} received. Closing server gracefully...`);
  try {
    await mongoose.connection.close();
    console.log("MongoDB connection closed.");
    process.exit(0);
  } catch (error) {
    console.error(`Error during shutdown: ${error.message}`);
    process.exit(1);
  }
};

process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
process.on("SIGINT", () => gracefulShutdown("SIGINT"));

startServer();
