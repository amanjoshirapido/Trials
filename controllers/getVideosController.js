const redisclient = require("../connections/redis");
const Videos = require("../schema/VideoSchema");

module.exports = async (req,res)=> {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const skip = (page-1) * limit ;
    const cachingKey = `getvideos:page=${page}&limit=${limit}`;
    const result = await redisclient.get(cachingKey).then (async (data,err)=> {
        if(err) {
            return res.status(500).send('Error retrieving data from cache');
        }
        if(data) {
            return res.json(JSON.parse(data));
        }
        else { // if video is not present in redis make a request to DB.
            const videos = await Videos.find().sort({publishedAt:-1}).skip(skip).limit(limit)
            client.set(cachingKey,JSON.stringify(videos),'EX',60); // data in redis expires after 60 seconds.
            return res.json(videos)
        }
     }); 
}