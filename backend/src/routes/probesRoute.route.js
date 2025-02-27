const statusRouter = require('express').Router();

statusRouter.get('', async (req, res) => {
  return res.json({ status: 'success', message: 'api is ok' });
});

module.exports = statusRouter;
