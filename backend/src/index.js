const express = require('express');
const logger = require('morgan');
const connectDBInstance = require('./db/connection');
const orderRouter = require('./routes/order.router');
const statusRouter = require('./routes/status.router');
const setUpSwaggerDocs = require('./docs/swagger.docs');
const { MONGO_URL, PORT } = require('./config/env.config');

connectDBInstance(MONGO_URL);

const app = express();
setUpSwaggerDocs(app)


app.use(cors())
app.use(express.json());
app.use(logger('common'));
app.use('/api/v1/status', statusRouter);
app.use('/api/v1/order', orderRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
