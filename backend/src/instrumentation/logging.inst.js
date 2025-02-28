const { LOG_LEVEL } = require('../config/env.config');
const { trace } = require('@opentelemetry/api');

const pino = require('pino');

const pinoLogger = pino({
  level: LOG_LEVEL || 'info',
  messageKey: 'message',
  formatters: {
    level (label) {
      return { level: label };
    }
  },
  // Add trace context to logs
  mixin () {
    const activeSpan = trace.getActiveSpan();
    if (activeSpan) {
      const spanContext = activeSpan.spanContext();
      return {
        trace_id: spanContext.traceId,
        span_id: spanContext.spanId
      };
    }
    return {};
  }
});

module.exports = { pinoLogger };
