const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { trace, context, SpanStatusCode } = require('@opentelemetry/api');
const expressPino = require('express-pino-logger');
const connectDBInstance = require('./db/connection');
const statusRouter = require('./routes/probesRoute.route');
const authRouter = require('./routes/authRoutes.route');
const userRouter = require('./routes/userRoutes.route');
const ticketRouter = require('./routes/ticketRoutes.route');
const eventsRouter = require('./routes/eventsRouter.route');
const registrationRouter = require('./routes/registrationRoutes.route');
const setUpSwaggerDocs = require('./docs/swagger.docs');
const { setupOpenTelemetry } = require('./instrumentation/tracing.inst');
const { pinoLogger } = require('./instrumentation/logging.inst');
const logger = require('./middleware/logger.middleware');
const { MONGO_URL, PORT } = require('./config/env.config');

const otelSdk = setupOpenTelemetry();
const expressLogger = expressPino({ pinoLogger });

const connectToDatabase = async (url) => {
  const tracer = trace.getTracer('mongodb-connect');
  return await tracer.startActiveSpan('mongodb.connect', async (span) => {
    try {
      pinoLogger.info('Connecting to MongoDB');
      const result = await connectDBInstance(url);
      span.setStatus({ code: SpanStatusCode.OK });
      pinoLogger.info('Connected to MongoDB successfully');
      return result;
    } catch (error) {
      pinoLogger.error(
        { error: error.message, stack: error.stack },
        'Failed to connect to MongoDB'
      );
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message
      });
      span.recordException(error);
      throw error;
    } finally {
      span.end();
    }
  });
};

connectToDatabase(MONGO_URL).catch((err) => {
  pinoLogger.fatal(
    { err },
    'Failed to connect to database. Shutting down application.'
  );
  process.exit(1);
});

const app = express();
setUpSwaggerDocs(app);

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(expressLogger);
app.use(logger);

app.use('/api/v1/probes', statusRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/events', eventsRouter);
app.use('/api/v1/registrations', registrationRouter);
app.use('/api/v1/tickets', ticketRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
