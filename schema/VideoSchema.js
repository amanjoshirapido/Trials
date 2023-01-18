const { Mongoose, default: mongoose } = require("mongoose");

const videoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    publishedAt:{
        type:String,
        required:true
    },
    thumbNails:{
        type:[Object],
        required:true
    },
    channelTitle:String
}) 

const Video = mongoose.model('Video',videoSchema);
module.exports =  Video
