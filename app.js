// app.js
const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/eventBooking", require("./routes/bookingRoutes"));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;