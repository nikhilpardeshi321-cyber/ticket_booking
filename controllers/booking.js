const eventModel = require("../models/event");
const bookingModel = require("../models/booking");

exports.bookTicket = async (req, res) => {
    const eventId = req.params.id;
    const userId = req.user.id;
    const { tickets } = req.body;

    // Atomic operation (prevents race condition)
    const event = await eventModel.findOneAndUpdate(
        {
            _id: eventId,
            availableTickets: { $gte: tickets }
        },
        {
            $inc: { availableTickets: -tickets }
        },
        { new: true }
    );

    if (!event) {
        return res.status(400).json({ status: false, message: "Tickets sold out" });
    }
    await bookingModel.create({
        userId: req.user.id,
        eventId,
        tickets
    });

    res.status(201).json({ status: true, message: "Booking successful" });
};