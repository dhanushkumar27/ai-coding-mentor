const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/health.routes");
const analysisRoutes = require("./routes/analysis.routes");
const app = express();

// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());


// Routes
app.use("/api/v1/health", healthRoutes);
app.use("/api/v1/analysis", analysisRoutes);

module.exports = app;
