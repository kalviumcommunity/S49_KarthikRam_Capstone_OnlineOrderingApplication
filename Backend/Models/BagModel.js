const mongoose = require('mongoose')

const BagSchema = mongoose.Schema({
    image: String,
    dishname: String,
    quantity: Number,
    username: String
})

const BagModel = mongoose.model('bagdata', BagSchema)
module.exports = BagModel;