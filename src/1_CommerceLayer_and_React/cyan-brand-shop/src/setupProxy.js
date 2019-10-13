const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/api', proxy({
        target: 'http://the-cyan-brand-75.commercelayer.io',
        changeOrigin: true,
    }));
};
