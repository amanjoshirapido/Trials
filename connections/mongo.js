const mongoose = require('mongoose');

const mongoClient = mongoose.connect('mongodb://localhost:27017/trialCollection').then(()=>{
    console.log("connected to mongo");
})

module.exports=mongoClient;