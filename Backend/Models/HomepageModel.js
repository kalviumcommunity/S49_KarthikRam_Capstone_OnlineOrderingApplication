const mongoose = require('mongoose')

const HomepageSchema = mongoose.Schema({
    name : String,
    img: String,
    price: Number,
    available: Boolean,
    category: String
})

const HomepageModel = mongoose.model('homepagedata', HomepageSchema)
module.exports = HomepageModel