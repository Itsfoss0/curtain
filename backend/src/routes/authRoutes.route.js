const authController = require('../controllers/auth.controller');
const { instrumentRoute } = require('../middleware/instrumentation.middleware');

const authRouter = require('express').Router();

authRouter.post(
  '/register',
  instrumentRoute('auth.register'),
  authController.register
);

authRouter.post(
  '/login',
  instrumentRoute('auth.login'),
  authController.login
);

authRouter.get(
  '/verify/:id',
  instrumentRoute('auth.verify'),
  authController.verify
);

authRouter.post(
  '/token/refresh',
  instrumentRoute('auth.refresh_token'),
  authController.refreshToken
);

module.exports = authRouter;
