
const redis = require("redis");
const redisclient = redis.createClient();
  
(async () => {
    await redisclient.connect();
})();
redisclient.on("ready", () => {
    console.log("connected to redis!");
});
redisclient.on("error", (err) => {
    console.log("Error in the Connection");
});
module.exports = redisclient;