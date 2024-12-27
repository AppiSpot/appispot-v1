const express = require('express');
const client = require('prom-client');

var app = express();
const register = new client.Registry();

// Default metrics collection
client.collectDefaultMetrics({ register });

// Custom example metric
const httpRequestDuration = new client.Histogram({
    name: 'http_request_duration_seconds',
    help: 'HTTP request duration in seconds',
    labelNames: ['method', 'route', 'status_code'],
});
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


