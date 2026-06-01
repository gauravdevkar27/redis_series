import Redis from "ioredis";

const redis = new Redis({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
});

export default redis;