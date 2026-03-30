const Event = require("../models/event");
const Booking = require("../models/booking");

exports.bookTicket = async (req, res) => {
  const eventId = req.params.id;
  const userId = req.user.id;
  const { tickets } = req.body;

  // Atomic operation (prevents race condition)
  const event = await Event.findOneAndUpdate(
    {
      _id: eventId,
      availableTickets: { $gte: tickets }
    },
    {
      $inc: { availableTickets: -tickets }
    },
    { new: true }
  );

  if (!event){
    return res.status(400).json({ status: false, message: "Tickets sold out" });
    }
  await Booking.create({
    userId: req.user.id,
    eventId,
    tickets
  });

  res.status(201).json({status: true, message: "Booking successful" });
};