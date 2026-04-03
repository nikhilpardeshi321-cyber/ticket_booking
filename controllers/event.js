// controllers/eventController.js
const eventModel = require("../models/event");

exports.createEvent = async (req, res) => {
    const { title, date, totalTickets } = req.body;

    const event = await eventModel.create({
        title,
        date,
        totalTickets,
        availableTickets: totalTickets
    });

    res.status(201).json({ status: true, message: "Event created successfully", data: event });
};

exports.getEvents = async (req, res) => {
    const events = await eventModel.find({}, "title");
    events ? res.status(200).json({ status: true, data: events }) : res.status(404).json({ status: false, message: "Events not found" });
};

exports.getEvent = async (req, res) => {
    const event = await eventModel.findById(req.params.id);
    event ? res.status(200).json({ status: true, data: event }) : res.status(404).json({ status: false, message: "Event details not found" });
};

exports.updateEvent = async (req, res) => {
    const event = await eventModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json({ status: true, data: event });
};

exports.deleteEvent = async (req, res) => {
    await eventModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: true, message: "Deleted successfully" });
};