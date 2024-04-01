const mongoose = require('mongoose')

const SignInSchema = mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    password: String
})

const SignInModel = mongoose.model("signInData", SignInSchema)
module.exports = SignInModel;