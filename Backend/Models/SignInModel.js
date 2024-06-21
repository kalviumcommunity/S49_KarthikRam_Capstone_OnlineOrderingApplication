const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const SignInSchema = mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    password: String
})

SignInSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
})

const SignInModel = mongoose.model("signInData", SignInSchema)
module.exports = SignInModel;