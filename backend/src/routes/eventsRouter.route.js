const eventsRouter = require('express').Router();
const eventsController = require('../controllers/eventsController.controller');
const authMiddleware = require('../middleware/authMiddleware.middleware');

eventsRouter.get('', eventsController.getAllEvents);
eventsRouter.get('/:eventId', eventsController.getEventById);

eventsRouter.post(
  '/',
  authMiddleware.authenticate,
  eventsController.createEvent
);

eventsRouter.patch(
  '/:eventId',
  authMiddleware.authenticate,
  eventsController.updateEvent
);

eventsRouter.put(
  '/:eventId/publish',
  authMiddleware.authenticate,
  eventsController.publishEvent
);

eventsRouter.delete(
  '/:eventId',
  authMiddleware.authenticate,
  eventsController.deleteEvent
);

module.exports = eventsRouter;
