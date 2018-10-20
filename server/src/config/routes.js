const express = require('express');

module.exports = (server) => {
    // API Routes
    const router = express.Router();
    server.use('/api', router);

    // TODO Routes
    const service = require('../api/service/todo');
    service.register(router, '/todos')
};