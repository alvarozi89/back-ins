const mongoose = require('mongoose');
const {Schema} = mongoose

const informacionSchema = new Schema({
    country: String,
    city: String,
    address: String,
    photoProfile: String,
    usuario: String,
    date:{type:Date,default:Date.now}
})

module.exports = mongoose.model('informacion',informacionSchema)
