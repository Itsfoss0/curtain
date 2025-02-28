const userController = require('../controllers/userController.controller');
const userRouter = require('express').Router();
const {
  authenticate,
  authorize
} = require('../middleware/authMiddleware.middleware');

userRouter.get('/profile', authenticate, userController.getProfile);
userRouter.put('/profile', authenticate, userController.updateProfile);
userRouter.post('/resetPassword', authenticate, userController.changePassword);

// admin only routes
userRouter.get(
  '/all',
  authenticate,
  authorize('admin'),
  userController.getAllUsers
);

userRouter.put(
  '/:userId/role',
  authenticate,
  authorize('admin'),
  userController.updateUserRole
);

userRouter.delete(
  '/:userId/',
  authenticate,
  authorize('admin', userController.deleteUser)
);

module.exports = userRouter;
