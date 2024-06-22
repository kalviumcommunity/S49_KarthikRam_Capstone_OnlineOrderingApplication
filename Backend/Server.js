const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(express.json())
app.use(cors())

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
const loginRoute = require('./Login')
const AuthMiddleware = require('./AuthMiddleware')
const ProtectedRoute = require('./ProtectedRoute')

app.use('/api', homeRoute, Review, SignInRoute, loginRoute, AuthMiddleware, ProtectedRoute);
app.use('/bag', bagRoute);

const port = process.env.PORT;
app.listen(port, ()=> console.log(`🚀 Server running on port ${port}`));