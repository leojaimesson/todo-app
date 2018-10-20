const dotenv = require('dotenv');

if (process.env.NODE_ENV != 'production') {
    dotenv.config();
}

module.exports = {
    server: {
        port: process.env.SERVER_PORT
    },
    mongodb: {
        uri: process.env.MONGO_URI
    }
}
