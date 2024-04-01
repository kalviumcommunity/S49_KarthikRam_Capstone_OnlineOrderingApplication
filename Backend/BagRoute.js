const express = require('express')
const bagRoute = express.Router();

bagRoute.get("/selected", (req, res)=>{
    try{
        console.log("request recieved on /bag/selected")
        res.json({message: "Bag data"})
    }catch(err){
        console.error("Internal server error", err)
        res.status(500).json({error: "Internal server error"})
    }
})

bagRoute.post('/selected', (req, res)=>{
    try{
        console.log("Post received on /bag/selected")
        const newData = req.body
        res.json({message: "Data sucessfully posted", data: newData})
    }catch(err){
        res.status(500).json({error: "Internal server error"})
    }
})

module.exports = bagRoute;