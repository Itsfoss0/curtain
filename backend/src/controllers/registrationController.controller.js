const Registration = require('../models/Registration.model');
const Event = require('../models/Event.model');
const Ticket = require('../models/Ticket.model');

// Create a new registration
exports.createRegistration = async (req, res) => {
  try {
    const attendee = req.user.id;
    const { event, ticketType, quantity } = req.body;

    const eventExists = await Event.findById(event);
    if (!eventExists) {
      return res.status(404).json({ error: 'Event not found' });
    }

    const ticket = await Ticket.findOne({ event, name: ticketType });
    if (!ticket) {
      return res.status(404).json({ error: 'Tickets are sould out' });
    }

    const totalAmount = ticket.price * quantity;

    const registration = new Registration({
      event,
      attendee,
      ticketType,
      quantity,
      totalAmount
    });

    await registration.save();

    res.status(201).json(registration);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/*
 * Get all registrations (with optional filters)
 * only the  event organizer or
 * an admin should be able to do this
 */

exports.getAllRegistrations = async (req, res) => {
  try {
    const { event, attendee, status, page = 1, limit = 10 } = req.query;

    const filter = {};
    if (event) filter.event = event;
    if (attendee) filter.attendee = attendee;
    if (status) filter.status = status;

    const registrations = await Registration.find(filter)
      .populate('event', 'title startDate')
      .populate('attendee', 'name email')
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const total = await Registration.countDocuments(filter);

    res.json({
      total,
      page: Number(page),
      limit: Number(limit),
      registrations
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// Get registrations for an event

exports.getEventRegistrations = async (req, res) => {
  const { eventId } = req.params;
  const { id } = req.user;
  const event = await Event.findById(eventId);

  if (!event) {
    return res.status(404).json({ error: 'no event with such ID' });
  }

  // check if the user is the event organizer
  if (event.organizer.toString() !== id.toString()) {
    return res
      .status(403)
      .json({ error: "unathorized to view this event's registration" });
  }

  const registrations = await Registration.find({ event: event._id });
  return res.json({ registrations });
};

// Get a single registration by ID
exports.getRegistrationById = async (req, res) => {
  try {
    const { id } = req.params;
    const registration = await Registration.findById(id)
      .populate('event', 'title startDate')
      .populate('attendee', 'name email');

    if (!registration) {
      return res.status(404).json({ error: 'Registration not found' });
    }

    res.json(registration);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update registration (for status, payment update, etc.)
exports.updateRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRegistration = await Registration.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedRegistration) {
      return res.status(404).json({ error: 'Registration not found' });
    }

    res.json(updatedRegistration);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a registration (for cancellation)
exports.deleteRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    const registration = await Registration.findById(id);

    if (!registration) {
      return res.status(404).json({ error: 'Registration not found' });
    }

    registration.status = 'cancelled';
    const cancelledReg = await registration.save();

    res.json({ message: 'Registration cancelled successfully', registration: cancelledReg });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
