
const axios = require('axios');
const { default: mongoose } = require('mongoose');
const Video = require('../schema/VideoSchema');
let currentApiKeyIndex = 0;
const youtubeApiKeys = ['AIzaSyDL_N1o5ybiJ5Yu_hIFTTtinuCYDMOfU-o', 'AIzaSyDL_N1o5ybiJ5Yu_hIFTTtinuCYDMOfU-p']; // the keys shouldnt be hardcoded though. should be put in a .env file

const searchQuery = 'football';
const youtubeApiScheduler = setInterval(async () => {
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                key: youtubeApiKeys[currentApiKeyIndex],
                q: searchQuery,
                part: 'snippet',
                type: 'video',
                maxResults: 1,
            },
        });
        latestVideos = response.data.items;
        latestVideos.map(video => {
            const newVideo = new Video({
                title: video.snippet.title,
                description: video.snippet.description,
                publishedAt: video.snippet.publishedAt,
                thumbNails: video.snippet.thumbNails,
                channelTitle: video.snippet.channelTitle
            })
            newVideo.save(function (err, result) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(result)
                }
            })
        })
    } catch (error) {
        console.log(error);
        if (error.response.status === 403 && currentApiKeyIndex < apiKeys.length - 1) {
            currentApiKeyIndex++;
            console.log(`API key ${apiKeys[currentApiKeyIndex - 1]} exhausted. Switching to key ${apiKeys[currentApiKeyIndex]}`);
        }
    }
}, 1000)

module.exports = youtubeApiScheduler



