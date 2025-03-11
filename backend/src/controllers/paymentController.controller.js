const {
  DARAJA_CONSUMER_KEY,
  DARAJA_CONSUMER_SECRET,
  DARAJA_CALLBACK_URL,
  DARAJA_PASS_KEY
} = require('../config/env.config');

const axios = require('axios');
const Mpesa = require('daraja.js').Mpesa;
const app = new Mpesa({
  consumerKey: DARAJA_CONSUMER_KEY,
  consumerSecret: DARAJA_CONSUMER_SECRET,
  initiatorPassword: 'Safaricom999!*!',
  organizationShortCode: 174379
});

const BASE_URL = 'https://sandbox.safaricom.co.ke/';

exports.initiatePayment = async (req, res) => {
  const { phoneNumber, amount } = req.body;

  const resp = await app
    .stkPush()
    .amount(amount)
    .callbackURL(DARAJA_CALLBACK_URL)
    .phoneNumber(phoneNumber)
    .lipaNaMpesaPassKey(DARAJA_PASS_KEY)
    .send();

  if (resp.isOkay()) {
    return res.json({ message: 'Payment initiated' });
  }
};
