const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  eventId: mongoose.Schema.Types.ObjectId,
  tickets: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Booking", bookingSchema);