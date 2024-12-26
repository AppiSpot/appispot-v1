const express = require('express');
const url = require('url');
const client = require('prom-client');

var app = express();
const register = new client.Registry();
// Add a default label which is added to all metrics
register.setDefaultLabels({
    app: 'Appispot'
  })  

// Default metrics collection
client.collectDefaultMetrics({ register });

// Custom example metric
const httpRequestDurationMicroseconds = new client.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in microseconds',
    labelNames: ['method', 'route', 'code'],
    buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10]
  })
register.registerMetric(httpRequestDuration);

// Metrics endpoint
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
});

module.exports = app;

// setup config
require('./app/config')(app);

// database
if (process.env.NODE_ENV !== 'test') {
    require('./app/config/database').connect();
}


