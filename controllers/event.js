// controllers/eventController.js
const Event = require("../models/event");

exports.createEvent = async (req, res) => {
    const { title, date, totalTickets } = req.body;

    const event = await Event.create({
        title,
        date,
        totalTickets,
        availableTickets: totalTickets
    });

    res.status(201).json({ status: true, message: "Event created successfully", data: event });
};

exports.getEvents = async (req, res) => {
    const events = await Event.find({},"title");
    res.status(200).json({ status: true, data: events });
};

exports.getEvent = async (req, res) => {
    const event = await Event.findById(req.params.id);
    res.status(200).json({ status: true, data: event });
};

exports.updateEvent = async (req, res) => {
    const event = await Event.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json({ status: true, data: event });
};

exports.deleteEvent = async (req, res) => {
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: true, message: "Deleted successfully" });
};