const Order = require('../models/Order.model');
const Results = require('../utils/Results.util');

const orderRouter = require('express').Router();

orderRouter.get('', async (req, res) => {
  try {
    const queryParams = req.query;
    const orderQuery = Order.find();
    const results = new Results(orderQuery, queryParams)
      .filter()
      .sort()
      .paginate();
    const data = await results.execute();
    return res.json({ message: 'success', payload: data });
  } catch (err) {
    console.error(err);
  }
});

module.exports = orderRouter;
