const express = require("express")
const review = express.Router()

review.post('/review', (req, res)=>{
    try{
        console.log("Post recieved on /api/review")
        const newReview = req.body
        res.json({message: "Review sucessfully posted", data: newReview})
    }catch(err){
        console.error("error", err)
        res.status(500).json({error: "Internal server error"})
    }
})

module.exports = review;