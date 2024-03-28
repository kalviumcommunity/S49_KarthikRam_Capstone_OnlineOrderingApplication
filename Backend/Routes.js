const express = require('express')
const router = express.Router()

router.get('/homepage/data', (req, res)=>{
    try{
        console.log("request recieved on /api/homepage/data")
        const data = {message: "Hello from backend"}
        res.json(data)
    }catch(err){
        res.send("Internal server error", err)
    }
})

module.exports = router;