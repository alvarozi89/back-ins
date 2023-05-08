const usuarioCtrl = {};
const usuarioModel = require('../models/usuario.models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

usuarioCtrl.crearUsuario = async(req,res)=>{
    const {email,phoneNumber,firstname,lastname,documentType,documentNumber,birthdate}= req.body 
    const nuevousuario = new usuarioModel({
        email,
        phoneNumber,
        firstname,
        lastname,
        documentType,
        documentNumber,
        birthdate
    })


    const correoUsuario = await usuarioModel.findOne({email:email})
    if(correoUsuario) {
        res.json({
            mensaje: 'El usuario ya existe'
        })
    }
    else {
        nuevousuario.phoneNumber = await bcrypt.hash(phoneNumber,10)
        const token = jwt.sign({_id:nuevousuario._id}, 'Secreta')
        await nuevousuario.save()
        res.json({
            mensaje: 'Bienvenido',
            id: nuevousuario._id,
            nombre: nuevousuario.firstname,
            token
        })
    }
}

        usuarioCtrl.login = async(req,res)=>{
            const {email,phoneNumber}= req.body
            const usuario = await usuarioModel.findOne({email:email})
            if(!usuario){
                return res.json({
                    mensaje: 'correo incorrecto'
                })
            }

            const match = await bcrypt.compare(phoneNumber,usuario.phoneNumber)
            if(match){

                const token = jwt.sign({_id: usuario._id}, 'Secreta')
                res.json({
                    mensaje: 'Bienvenido',
                    id: usuario.id,
                    nombre: usuario.firstname,
                    token
                })
                
            }

            else {
                res.json({
                    mensaje:'Contraseña incorrecta'
                })
            }

        }


module.exports= usuarioCtrl