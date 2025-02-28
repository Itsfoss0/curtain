const { trace, context, SpanStatusCode } = require('@opentelemetry/api');

/**
 * Middleware to add custom instrumentation for specific routes
 */

const instrumentRoute = (operationName) => {
  return (req, res, next) => {
    const tracer = trace.getTracer('express-routes');

    // Start a new span for this route
    tracer.startActiveSpan(`route.${operationName}`, (span) => {
      span.setAttribute('http.route', req.path);
      span.setAttribute('http.method', req.method);
      span.setAttribute('user.id', req.user?.id || 'anonymous');

      req.currentSpan = span;

      const originalEnd = res.end;

      res.end = function (...args) {
        span.setAttribute('http.status_code', res.statusCode);

        if (res.statusCode >= 400) {
          span.setStatus({
            code: SpanStatusCode.ERROR,
            message: `HTTP ${res.statusCode}`
          });
        } else {
          span.setStatus({ code: SpanStatusCode.OK });
        }

        span.end();

        return originalEnd.apply(this, args);
      };

      next();
    });
  };
};

/**
 * Middleware to instrument database operations
 * To wrap database calls
 */
const instrumentDBOperation = (operation, collection) => {
  return async (fn) => {
    const tracer = trace.getTracer('db-operations');

    return await tracer.startActiveSpan(`db.${operation}`, async (span) => {
      try {
        span.setAttribute('db.operation', operation);
        span.setAttribute('db.collection', collection);
        span.setAttribute('db.type', 'mongodb');

        const result = await fn();

        span.setStatus({ code: SpanStatusCode.OK });

        return result;
      } catch (error) {
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
};

module.exports = {
  instrumentRoute,
  instrumentDBOperation
};
