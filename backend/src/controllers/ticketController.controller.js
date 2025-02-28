const Ticket = require('../models/Ticket.model');
const Event = require('../models/Event.model');

// Create a new ticket and associate it with an event
exports.createTicket = async (req, res) => {
  try {
    const { id, role } = req.user;
    const { event, name, description, price, availableUntil } = req.body;

    const eventExists = await Event.findById(event);
    if (!eventExists) {
      return res.status(404).json({ error: 'Event not found' });
    }

    const userCanCreateTicket =
      eventExists.organizer.toString() === id || role === 'admin';

    if (!userCanCreateTicket) {
      return res
        .status(403)
        .json({ error: 'unauthorized to create ticket for this event' });
    }

    const ticket = new Ticket({
      event,
      name,
      description,
      price,
      availableUntil
    });
    await ticket.save();

    eventExists.tickets.push(ticket._id);
    await eventExists.save();

    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all tickets (with optional filtering by event and price)
exports.getAllTickets = async (req, res) => {
  try {
    const { event, minPrice, maxPrice } = req.query;

    const filter = {};
    if (event) filter.event = event;
    if (minPrice) { filter.price = { ...filter.price, $gte: parseFloat(minPrice) }; }
    if (maxPrice) { filter.price = { ...filter.price, $lte: parseFloat(maxPrice) }; }

    const tickets = await Ticket.find(filter).populate(
      'event',
      'title startDate endDate location'
    );
    res.json({ tickets });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single ticket by ID
exports.getTicketById = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const ticket = await Ticket.findById(ticketId).populate(
      'event',
      'title startDate endDate location'
    );
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a ticket (only specified fields)
exports.updateTicket = async (req, res) => {
  try {
    const { ticketId } = req.params;

    const allowedUpdates = ['name', 'description', 'price', 'availableUntil'];
    const updates = {};
    for (const key in req.body) {
      if (allowedUpdates.includes(key)) {
        updates[key] = req.body[key];
      }
    }

    const ticket = await Ticket.findByIdAndUpdate(ticketId, updates, {
      new: true,
      runValidators: true
    });

    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    res.json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a ticket and remove it from the event
exports.deleteTicket = async (req, res) => {
  try {
    const { ticketId } = req.params;

    const ticket = await Ticket.findByIdAndDelete(ticketId);

    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    // Remove the ticket from the associated event
    await Event.findByIdAndUpdate(ticket.event, {
      $pull: { tickets: ticketId }
    });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
