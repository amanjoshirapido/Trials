const Video = require("../schema/VideoSchema");


module.exports=async (req,res) =>{
    const titleQuery = req.query.title;
    const descriptionQuery = req.query.description;

    const video = await Video.find({$text:{$search:titleQuery,$search:descriptionQuery}})
    res.json({video});
}