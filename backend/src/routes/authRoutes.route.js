const authController = require('../controllers/auth.controller');

const authRouter = require('express').Router();

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.post('/token/refresh', authController.refreshToken);

module.exports = authRouter;
