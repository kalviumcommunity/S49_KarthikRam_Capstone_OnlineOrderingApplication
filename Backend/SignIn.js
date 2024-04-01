const express = require('express')
const loginRoute = express.Router();
const SignInModel = require('./Models/SignInModel')

loginRoute.post('/loginData', async(req, res)=>{
    console.log(req.body)
    const {name, phone, email, password} = req.body;
    const newEntity = new SignInModel({name, phone, email, password});
    try{
        console.log("Post received on /api/loginData")
        const savedEntity = await newEntity.save()
        res.json({message: 'Login data sucessfully posted', data: savedEntity})
    }catch(err){
        console.error("error", err)
        res.status(500).json({error: "Internal server error"})
    }
})

module.exports = loginRoute;