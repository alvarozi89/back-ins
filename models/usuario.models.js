const mongoose = require('mongoose');
const {Schema} = mongoose

const usuarioSchema = new Schema({
    email: String,
    phoneNumber: String,
    firstname: String,
    lastname: String,
    documentType: String,
    documentNumber: String,
    birthdate: Date,
    expeditionDate:{type:Date,default:Date.now}
})

module.exports = mongoose.model('usuario',usuarioSchema)

