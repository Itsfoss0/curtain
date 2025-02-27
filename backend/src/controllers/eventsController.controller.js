const Event = require('../models/Event.model');

// Create a new event
exports.createEvent = async (req, res) => {
  try {
    const organizer = req.user.id;
    const {
      title,
      description,
      startDate,
      endDate,
      capacity,
      location,
      category
    } = req.body;

    if (
      !title ||
      !description ||
      !startDate ||
      !endDate ||
      !capacity ||
      !location ||
      !category
    ) {
      return res.status(400).json({ error: 'all fields are required' });
    }
    const event = new Event({
      title,
      description,
      startDate,
      endDate,
      capacity,
      location,
      organizer,
      category
    });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all events with filtering, pagination, and sorting
exports.getAllEvents = async (req, res) => {
  try {
    const {
      category,
      startDate,
      endDate,
      published,
      page = 1,
      limit = 10,
      tags,
      sortBy = 'createdAt',
      order = 'desc'
    } = req.query;

    const filter = {};
    if (category) filter.category = category;
    if (tags) filter.tags = tags;
    if (published) filter.published = published === 'true';
    if (startDate || endDate) {
      filter.startDate = {};
      if (startDate) filter.startDate.$gte = new Date(startDate);
      if (endDate) filter.startDate.$lte = new Date(endDate);
    }

    const events = await Event.find(filter)
      .populate('organizer')
      .sort({ [sortBy]: order === 'desc' ? -1 : 1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Event.countDocuments(filter);

    res.json({ total, page: Number(page), limit: Number(limit), events });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single event by ID
exports.getEventById = async (req, res) => {
  try {
    const { eventId } = req.params;
    const event = await Event.findById(eventId).populate('organizer');
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an event

exports.updateEvent = async (req, res) => {
  const allowedUpdates = [
    'title',
    'description',
    'category',
    'startDate',
    'endDate',
    'location',
    'capacity',
    'tags',
    'status',
    'published',
    'coverImage'
  ];
  try {
    const { eventId } = req.params;

    const updates = {};
    for (const key in req.body) {
      if (allowedUpdates.includes(key)) {
        updates[key] = req.body[key];
      }
    }

    const event = await Event.findOneAndUpdate({ _id: eventId }, updates, {
      new: true,
      runValidators: true
    });

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Publish or unpublish an event
exports.publishEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    event.published = !event.published;
    event.status = event.published ? 'published' : 'draft';
    await event.save();

    res.json({
      message: `Event ${event.published ? 'published' : 'unpublished'}`,
      event
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an event
exports.deleteEvent = async (req, res) => {
  try {
    const { id, role } = req.user;
    const { eventId } = req.params;
    const eventToDelete = await Event.findById(eventId);

    if (!eventToDelete) {
      return res.status(404).json({ error: 'Event not found' });
    }

    // only an organizer  or admin should be able to delete an event
    const allowedToDelete = eventToDelete.organizer.toString() === id || role === 'admin';

    if (allowedToDelete) {
      await eventToDelete.deleteOne();
      return res.status(204).send();
    }
    return res.status(403).json({ error: 'not allowed to delete event' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
