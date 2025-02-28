const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDBInstance = require('./db/connection');
const statusRouter = require('./routes/probesRoute.route');
const authRouter = require('./routes/authRoutes.route');
const userRouter = require('./routes/userRoutes.route');
const ticketRouter = require('./routes/ticketRoutes.route');
const eventsRouter = require('./routes/eventsRouter.route');
const registrationRouter = require('./routes/registrationRoutes.route');
const setUpSwaggerDocs = require('./docs/swagger.docs');
const logger = require('./middleware/logger.middleware');
const { MONGO_URL, PORT } = require('./config/env.config');

connectDBInstance(MONGO_URL);

const app = express();
setUpSwaggerDocs(app);

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(logger);

app.use('/api/v1/status', statusRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/events', eventsRouter);
app.use('/api/v1/registrations', registrationRouter);
app.use('/api/v1/tickets', ticketRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
