const mongoose = require('mongoose');
const {Schema} = mongoose

const informacionSchema = new Schema({
    nombre: String,
    usuario: String,
    date:{type:Date,default:Date.now}
})

module.exports = mongoose.model('hobbie',informacionSchema)
