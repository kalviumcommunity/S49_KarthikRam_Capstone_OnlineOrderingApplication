const express = require('express')
const bagRoute = express.Router();

bagRoute.get("/selected", (req, res)=>{
    try{
        console.log("request recieved on /bag/selected")
        res.json({message: "Bag data"})
    }catch(err){
        console.log("Internal server error", err)
    }
})

module.exports = bagRoute;