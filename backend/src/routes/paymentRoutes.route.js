const paymentRouter = require('express').Router();
const paymentController = require('../controllers/paymentController.controller');

paymentRouter.post('/', paymentController.initiatePayment);

module.exports = paymentRouter;
