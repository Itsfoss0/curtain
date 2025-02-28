const registrationRouter = require('express').Router();
const authMiddleware = require('../middleware/authMiddleware.middleware');
const registrationController = require('../controllers/registrationController.controller');

registrationRouter.post(
  '/',
  authMiddleware.authenticate,
  registrationController.createRegistration
);

registrationRouter.get(
  '/',
  authMiddleware.authenticate,
  authMiddleware.authorize('admin'),
  registrationController.getAllRegistrations
);

registrationRouter.get(
  '/:id',
  authMiddleware.authenticate,
  registrationController.getRegistrationById
);

registrationRouter.get(
  '/event/:eventId',
  authMiddleware.authenticate,
  registrationController.getEventRegistrations
);

registrationRouter.patch(
  '/:id',
  authMiddleware.authenticate,
  registrationController.updateRegistration
);

registrationRouter.delete(
  '/:id',
  authMiddleware.authenticate,
  registrationController.deleteRegistration
);

module.exports = registrationRouter;
