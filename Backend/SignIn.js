const express = require('express')
const SignInRoute = express.Router();
const SignInModel = require('./Models/SignInModel')

SignInRoute.post('/loginData', async(req, res)=>{
    console.log(req.body)
    const {name, phone, email, password} = req.body;
    try{
        console.log("Post received on /api/loginData")
        const existingUser = await SignInModel.findOne({email:email})
        
        if (existingUser){
            return res.status(409).json({error: 'User already exists'})
        }
        const newEntity = new SignInModel({name, phone, email, password});
        const savedEntity = await newEntity.save()
        res.json({message: 'Login data sucessfully posted', data: savedEntity})
    }catch(err){
        console.error("error", err)
        res.status(500).json({error: "Internal server error"})
    }
})

module.exports = SignInRoute;