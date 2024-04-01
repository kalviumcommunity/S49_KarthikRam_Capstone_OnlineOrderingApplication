const express = require('express')
const homeRoute = express.Router()

homeRoute.get('/homepage', (req, res)=>{
    try{
        console.log("request recieved on /api/homepage")
        const data = {message: "homepage data"}
        res.json(data)
    }catch(err){
        res.status(500).json({error: "Internal server error"})
    }
})

module.exports = homeRoute;