const ticketRouter = require('express').Router();
const authMiddleware = require('../middleware/authMiddleware.middleware');
const ticketController = require('../controllers/ticketController.controller');

ticketRouter.get('', ticketController.getAllTickets);

ticketRouter.get('/:ticketId', ticketController.getTicketById);

ticketRouter.post(
  '',
  authMiddleware.authenticate,
  ticketController.createTicket
);

ticketRouter.patch(
  '/:ticketId',
  authMiddleware.authenticate,
  ticketController.updateTicket
);

ticketRouter.delete(
  '/:ticketId',
  authMiddleware.authenticate,
  ticketController.deleteTicket
);

module.exports = ticketRouter;
