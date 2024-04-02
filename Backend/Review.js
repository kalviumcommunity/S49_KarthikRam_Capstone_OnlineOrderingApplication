const express = require("express")
const review = express.Router()
const ReviewModel = require('./Models/ReviewModel')

review.post('/review', async(req, res)=>{
    console.log(req.body)
    const{name, review} = req.body
    const newEntity = new ReviewModel({name, review})
    try{
        console.log("Post recieved on /api/review")
        const newReview = await newEntity.save()
        res.json({message: "Review sucessfully posted", data: newReview})
    }catch(err){
        console.error("error", err)
        res.status(500).json({error: "Internal server error"})
    }
})

module.exports = review;