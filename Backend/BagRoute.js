const express = require('express')
const bagRoute = express.Router();
const BagModel = require('./Models/BagModel')

bagRoute.get("/selected", async(req, res)=>{
    try{
        console.log("request recieved on /bag/selected")
        const bagData = await BagModel.find()
        res.json({message: "Bag data", data: bagData})
    }catch(err){
        console.error("Internal server error", err)
        res.status(500).json({error: "Internal server error"})
    }
})

bagRoute.post('/selected', async(req, res)=>{
    console.log(req.body)
    const{image, dishname, quantity, username} = req.body
    const newEntity = new BagModel({image, dishname, quantity, username})
    try{
        console.log("Post received on /bag/selected")
        const newData = await newEntity.save()
        res.json({message: "Data sucessfully posted", data: newData})
    }catch(err){
        res.status(500).json({error: "Internal server error"})
    }
})

module.exports = bagRoute;