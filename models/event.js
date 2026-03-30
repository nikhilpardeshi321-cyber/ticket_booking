const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: String,
  date: Date,
  totalTickets: Number,
  availableTickets: Number
});

module.exports = mongoose.model("Event", eventSchema);