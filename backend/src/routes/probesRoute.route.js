const { trace, SpanStatusCode } = require('@opentelemetry/api');
const statusRouter = require('express').Router();

statusRouter.get('/status', async (req, res) => {
  return res.json({ status: 'success', message: 'api is ok' });
});

statusRouter.get('/health', (req, res) => {
  const tracer = trace.getTracer('health-check');
  const span = tracer.startSpan('health.check');

  try {
    span.setAttribute('app.status', 'ok');
    span.setAttribute('app.uptime', process.uptime());

    span.setStatus({ code: SpanStatusCode.OK });
    res.status(200).json({
      status: 'ok',
      uptime: process.uptime()
    });
  } catch (error) {
    span.setStatus({
      code: SpanStatusCode.ERROR,
      message: error.message
    });
    span.recordException(error);
    res.status(500).json({ status: 'error', message: error.message });
  } finally {
    span.end();
  }
});

module.exports = statusRouter;
