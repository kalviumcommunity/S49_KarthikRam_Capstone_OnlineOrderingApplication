const mongoose = require('mongoose')

const HomepageSchema = mongoose.Schema({
    name : String,
    img: String,
    price: Number,
    available: String,
    category: String
})

const HomepageModel = mongoose.model('homepagedata', HomepageSchema)
module.exports = HomepageModel