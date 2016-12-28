// Run this when the meteor app is started

// in startup server file (ex: /imports/startup/server/redis.js)
import { RedisOplog } from 'meteor/cultofcoders:redis-oplog';

// simple usage
//RedisOplog.init() // will work with 127.0.0.1:6379, the default

// sets up the configuration parameters:
// https://github.com/luin/ioredis#connect-to-redis

RedisOplog.init({
    redis: {
        port: 6379,          // Redis port
        host: '139.59.148.81',   // Redis host
        password: '13okinawa!'
    },
    debug: false, // default is false,
    overridePublishFunction: true // replaces .publish with .publishWithRedis, leave false if you don't want to override it
});
