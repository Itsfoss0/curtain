const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/User.model');
const Token = require('../models/Token.model');
const {
  ACCESS_TOKEN_EXPIRES_IN,
  JWT_SECRET,
  REFRESH_TOKEN_EXPIRES_IN,
  CLIENT_URL,
  TOKENS_VALID_FOR
} = require('../config/env.config');
const sendEmail = require('../services/sendEmail.service');
const { ms } = require('../utils/controller.utils');

const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: ACCESS_TOKEN_EXPIRES_IN }
  );
};

const generateRefreshToken = async (user, req) => {
  const refreshToken = crypto.randomBytes(16).toString('hex');
  const REFRESH_TOKEN_EXPIRES_IN_MS = ms(REFRESH_TOKEN_EXPIRES_IN);

  const expiresAt = new Date(Date.now() + REFRESH_TOKEN_EXPIRES_IN_MS);

  await Token.create({
    userId: user.id,
    token: refreshToken,
    userAgent: req.headers['user-agent'],
    ipAddress: req.ip,
    expiresAt
  });

  return refreshToken;
};

exports.register = async (req, res) => {
  try {
    const { email, userName, password, name, role } = req.body;
    const REFRESH_TOKEN_EXPIRES_IN_MS = ms(REFRESH_TOKEN_EXPIRES_IN);

    if (!email || !userName || !password || !name) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({
      $or: [{ email }, { userName }]
    });

    if (existingUser) {
      return res.status(409).json({
        message: 'User with this email or username already exists'
      });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      email,
      userName,
      passwordHash,
      name,
      role: role || 'attendee'
    });

    const savedUser = await newUser.save();

    const expiresAt = new Date(Date.now() + ms(TOKENS_VALID_FOR));
    const verifyToken = crypto.randomBytes(8).toString('hex');

    await Token.create({
      userId: savedUser.id,
      token: verifyToken,
      userAgent: req.headers['user-agent'],
      ipAddress: req.ip,
      expiresAt
    });

    const data = {
      currentDate: new Date().getFullYear(),
      name: savedUser.name,
      email: savedUser.email,
      verificationLink: `${CLIENT_URL}/auth/verify/${savedUser.id}?token=${verifyToken}`
    };

    await sendEmail(
      savedUser.email,
      'Verify your Scheduleflow Account',
      'accountCreated',
      data
    );
    const accessToken = generateAccessToken(savedUser);
    const refreshToken = await generateRefreshToken(savedUser, req);

    // Set refresh token as HTTP-only cookie
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: REFRESH_TOKEN_EXPIRES_IN_MS
    });

    res.status(201).json({
      message: 'User registered successfully',
      user: savedUser.toJSON(),
      accessToken
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error registering user',
      error: error.message
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const REFRESH_TOKEN_EXPIRES_IN_MS = ms(REFRESH_TOKEN_EXPIRES_IN);

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'no user with such email' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'invalid username or password' });
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = await generateRefreshToken(user, req);

    // Set refresh token as HTTP-only cookie
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      securee: true,
      sameSite: 'strict',
      maxAge: REFRESH_TOKEN_EXPIRES_IN_MS
    });

    res.status(200).json({
      message: 'Login successful',
      user: user.toJSON(),
      accessToken
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error during login',
      error: error.message
    });
  }
};

exports.verify = async (req, res, next) => {
  try {
    const { id } = req.params;
    const token = req.query.token;
    const user = await User.findById(id);
    const VerifyToken = await Token.findOne({
      userId: id,
      token
    });

    if (VerifyToken === null) {
      return res.status(404).json({ error: 'Invalid token' });
    }

    if (VerifyToken) {
      await User.updateOne(
        { _id: id },
        { $set: { verified: true } },
        { new: true }
      );

      await VerifyToken.deleteOne();
      const data = {
        name: user.name,
        loginLink: `${CLIENT_URL}/auth/login`,
        currentYear: new Date().getFullYear(),
        email: user.email
      };
      await sendEmail(
        user.email,
        'Your Account has been verified',
        'verified',
        data
      );

      res.json({
        status: 'success',
        message: 'Account verified successfully',
        userName: user.name
      });
    } else {
      res
        .status(403)
        .json({ status: 'error', message: 'Invalid verification token' });
    }
  } catch (error) {
    next(error);
  }
};

exports.refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: 'Refresh token required' });
    }

    const tokenDoc = await Token.findOne({
      token: refreshToken,
      isValid: true,
      expiresAt: { $gt: new Date() }
    });

    if (!tokenDoc) {
      return res
        .status(401)
        .json({ message: 'Invalid or expired refresh token' });
    }

    const user = await User.findById(tokenDoc.userId);

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    const accessToken = generateAccessToken(user);

    res.status(200).json({
      accessToken
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'internal server error'
    });
  }
};
