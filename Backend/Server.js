const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
app.use(express.json())

mongoose.connect(process.env.DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("MongoDB conection successful ✅")
})
.catch((err)=>{
    console.error("MongoDB connection unsuccessful ❌", err)
})

const homeRoute = require("./HomepageRoute");
const bagRoute = require('./BagRoute');
const Review = require("./Review");
const SignInRoute = require('./SignIn')

app.use('/api', homeRoute, Review, SignInRoute);
app.use('/bag', bagRoute);

const port = process.env.PORT;
app.listen(port, ()=> console.log(`🚀 Server running on port ${port}`));