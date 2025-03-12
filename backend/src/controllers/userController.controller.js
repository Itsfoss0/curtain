// userController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User.model');
const Token = require('../models/Token.model');
const crypto = require('crypto');
const sendEmail = require('../services/sendEmail.service');
const { CLIENT_URL, TOKENS_VALID_FOR } = require('../config/env.config');
const { ms } = require('../utils/controller.utils');

// Get user profile
exports.getProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user: user.toJSON() });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching user profile',
      error: error.message
    });
  }
};

// Update user profile
exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, email, userName } = req.body;

    if (!name && !email && !userName) {
      return res.status(400).json({
        message: 'At least one field to update is required'
      });
    }

    // Check if email or username is already taken
    if (email || userName) {
      const existingUser = await User.findOne({
        $and: [
          { _id: { $ne: userId } },
          { $or: [{ email: email || null }, { userName: userName || null }] }
        ]
      });

      if (existingUser) {
        return res.status(409).json({
          message: 'Email or username already taken'
        });
      }
    }

    // Update user
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        ...(name && { name }),
        ...(email && { email }),
        ...(userName && { userName }),
        updatedAt: Date.now()
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: 'Profile updated successfully',
      user: updatedUser.toJSON()
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating profile',
      error: error.message
    });
  }
};

// Change password
exports.changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword, email } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        message: 'Current password and new password are required'
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(
      currentPassword,
      user.passwordHash
    );

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }

    const saltRounds = 10;
    const newPasswordHash = await bcrypt.hash(newPassword, saltRounds);

    user.passwordHash = newPasswordHash;
    user.updatedAt = Date.now();
    await user.save();

    res.status(200).json({ message: 'Password changed successfully' });
  } catch (error) {
    res.status(500).json({
      message: 'Error changing password',
      error: error.message
    });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    const { userId } = req.params;
    const token = req.query.token;
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({
        message: 'New Password is required'
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const resetToken = await Token.findOne({ token });
    if (!resetToken) {
      return res
        .status(401)
        .json({ error: 'rest token is expired or invalid' });
    }

    const saltRounds = 10;
    const newPasswordHash = await bcrypt.hash(password, saltRounds);

    user.passwordHash = newPasswordHash;
    user.updatedAt = Date.now();
    await user.save();
    await resetToken.deleteOne();

    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error changing password',
      error: error.message
    });
  }
};

exports.allowUpdatePassword = async (req, res) => {
  try {
    const { userId } = req.params;
    const token = req.query.token;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'no user found with this ID' });
    }
    const resetToken = await Token.findOne({
      userId: user,
      token
    });

    if (!resetToken) {
      return res.status(404).json({ error: 'token is not valid' });
    }

    return res.json({
      message: 'password change allowed',
      userName: user.name
    });
  } catch (err) {
    console.error(err.message);
    return res.status(503).json({ error: 'an error occured on the server' });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'no user with such email exists' });
    }
    const token = crypto.randomBytes(16).toString('hex');
    const expiresAt = new Date(Date.now() + ms(TOKENS_VALID_FOR));
    const resetToken = new Token({
      token,
      userId: user.id,
      userAgent: req.headers['user-agent'],
      ipAddress: req.ip,
      expiresAt
    }).save();

    const data = {
      name: user.name,
      email: user.email,
      resetLink: `${CLIENT_URL}/auth/reset/${user.id}?token=${token}`,
      currentYear: new Date().getFullYear()
    };

    await sendEmail(
      user.email,
      'Reset your Scheduleflow password',
      'resetPassword',
      data
    );
    return res.json({ message: 'Reset instructions have been sent to your email' });
  } catch (error) {
    console.error(error.message);
    return res.status(503).json({ error: error.message });
  }
};

// Admin: Get all users (admin only)
exports.getAllUsers = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({
        message: 'Not authorized to access this resource'
      });
    }

    const users = await User.find();

    res.status(200).json({ users: users.map((user) => user.toJSON()) });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching users',
      error: error.message
    });
  }
};

// Admin: Update user role (admin only)
exports.updateUserRole = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({
        message: 'Not authorized to access this resource'
      });
    }

    const { userId } = req.params;
    const { role } = req.body;

    if (!userId || !role) {
      return res.status(400).json({
        message: 'User ID and role are required'
      });
    }

    const validRoles = ['attendee', 'organizer', 'admin'];
    if (!validRoles.includes(role)) {
      return res.status(400).json({
        message: 'Invalid role. Must be one of: attendee, organizer, admin'
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { role, updatedAt: Date.now() },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: 'User role updated successfully',
      user: updatedUser.toJSON()
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating user role',
      error: error.message
    });
  }
};

// Admin: Delete user (admin only)
exports.deleteUser = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({
        message: 'Not authorized to access this resource'
      });
    }

    const { userId } = req.params;

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(204).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting user',
      error: error.message
    });
  }
};
