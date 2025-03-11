const { NodeSDK } = require('@opentelemetry/sdk-node');
const {
  getNodeAutoInstrumentations
} = require('@opentelemetry/auto-instrumentations-node');
const {
  OTLPTraceExporter
} = require('@opentelemetry/exporter-trace-otlp-proto');
const {
  OTLPMetricExporter
} = require('@opentelemetry/exporter-metrics-otlp-proto');
const { Resource } = require('@opentelemetry/resources');
const {
  SemanticResourceAttributes
} = require('@opentelemetry/semantic-conventions');
const { PeriodicExportingMetricReader } = require('@opentelemetry/sdk-metrics');
const {
  OTEL_EXPORTER_OTLP_METRICS_ENDPOINT,
  NODE_ENV,
  OTEL_EXPORTER_OTLP_TRACES_ENDPOINT
} = require('../config/env.config');

// Configure the OpenTelemetry SDK
exports.setupOpenTelemetry = () => {
  const resource = new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'api-service',
    [SemanticResourceAttributes.SERVICE_VERSION]: '1.0.0',
    [SemanticResourceAttributes.DEPLOYMENT_ENVIRONMENT]: NODE_ENV
  });

  const traceExporter = new OTLPTraceExporter({
    url:
      OTEL_EXPORTER_OTLP_TRACES_ENDPOINT || 'http://otel-collector:4318/v1/traces',
    headers: {}
  });

  // Configure metrics exporter
  const metricExporter = new OTLPMetricExporter({
    url:
      OTEL_EXPORTER_OTLP_METRICS_ENDPOINT || 'http://otel-collector:4318/v1/metrics',
    headers: {}
  });

  const metricReader = new PeriodicExportingMetricReader({
    exporter: metricExporter,
    exportIntervalMillis: 15000 // Export metrics every 15 seconds
  });

  // Create and configure SDK
  const sdk = new NodeSDK({
    resource,
    traceExporter,
    metricReader,
    instrumentations: [
      getNodeAutoInstrumentations({
        '@opentelemetry/instrumentation-express': { enabled: true },
        '@opentelemetry/instrumentation-http': { enabled: true },
        '@opentelemetry/instrumentation-mongodb': { enabled: true },
        '@opentelemetry/instrumentation-mongoose': { enabled: true }
      })
    ]
  });

  try {
    sdk.start();
    console.log('✅ OpenTelemetry SDK initialized successfully.');
  } catch (err) {
    console.error('❌ Error initializing OpenTelemetry SDK:', err);
  }

  process.on('SIGTERM', async () => {
    try {
      await sdk.shutdown();
      console.log('✅ OpenTelemetry SDK shut down successfully.');
    } catch (error) {
      console.log('❌ Error shutting down OpenTelemetry SDK:', error);
    } finally {
      process.exit(0);
    }
  });

  return sdk;
};
