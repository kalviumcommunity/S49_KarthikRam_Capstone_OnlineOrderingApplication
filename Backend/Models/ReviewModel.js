const mongoose = require('mongoose')

const ReviewSchema = mongoose.Schema({
    name: String,
    review: String
})

const ReviewModel = mongoose.model('reviewdata', ReviewSchema)
module.exports = ReviewModel;