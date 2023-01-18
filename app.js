const express = require('express');
const redis = require('./connections/redis');
const db = require('./connections/mongo');
const videos = require('./routes/videos');
const schema = require('./schema/VideoSchema');
const youtubeApiScheduler = require('./utils/ytapicaller');
// const callYouTubeApi = require('./utils/callYoutubeApi');


const app = express()
const port = 3000;

app.use('/',videos);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });

