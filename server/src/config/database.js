const env = require('./environment');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.connect(env.mongodb.uri, { useNewUrlParser: true });
