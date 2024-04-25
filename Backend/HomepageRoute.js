const express = require('express')
const homeRoute = express.Router()

const HomepageModel = require('./Models/HomepageModel')

homeRoute.get('/homepage', async(req, res)=>{
    try{
        console.log("request recieved on /api/homepage")
        const homepagedata = await HomepageModel.find();
        const data = homepagedata
        res.json(data)
    }catch(err){
        res.status(500).json({error: "Internal server error"})
    }
})

module.exports = homeRoute;