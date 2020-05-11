var redis = require('redis');
var client = redis.createClient();
require('dotenv').config()
console.log(process.env.MAIL)
client.on('connect', function() {
    console.log('connected to Redis');
});