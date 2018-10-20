const env = require('./environment');
const bodyParser = require('body-parser');
const server = require('express')();
const allowCors = require('./cors');

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(env.server.port, function() {
    console.log(`Server is running on port ${env.server.port}.`);
})

module.exports = server;