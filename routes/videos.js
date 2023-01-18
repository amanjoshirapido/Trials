const express = require('express');
const router = express.Router();
const searchVideosBasedOnTitleAndDescription = require('../controllers/searchVideosController');
const getVideosBasedOnPageNumberAndLimit = require('../controllers/getVideosController');
    router.get('/sanity',(req,res)=>{
        res.send("service running"); // sanity to check if service is running
    })
    router.get('/searchvideos',searchVideosBasedOnTitleAndDescription); // search videos baased on title and description
    router.get('/getthings',getVideosBasedOnPageNumberAndLimit);

    module.exports = router
