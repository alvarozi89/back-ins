const informacionCtrl = {}
const informacionModels= require('../models/informacion.models')

informacionCtrl.crearinformacion = async(req,res)=>{
    const{country,city,address,photoProfile,usuario}= req.body
    const nuevoinformacion = new informacionModels({
        country,
        city,
        address,
        photoProfile,
        usuario
    })
    const respuesta = await nuevoinformacion.save()
    res.json({
        mensaje: 'informacion creado',
        respuesta
    })
}

informacionCtrl.listar = async(req,res)=>{
    const respuesta = await informacionModels.find()
    res.json(respuesta)
}

informacionCtrl.listarId = async(req,res)=>{
    const id = req.params.id
    const respuesta =await informacionModels.findById({_id:id})
    res.json(respuesta)
}

informacionCtrl.listarCedula = async(req,res)=>{
    const cedula = req.params.cedula 
    const respuesta = await informacionModels.findOne({cedula:cedula})
    res.json(respuesta)
}

informacionCtrl.informacionsDeUnusuario = async(req,res)=>{
    const id = req.params.id
    const respuesta = await informacionModels.find({usuario:id})
    res.json(respuesta)
}

informacionCtrl.informacionsDeUnusuarioBuscar = async(req,res)=>{
    const id = req.params.id
    const {country} = req.params;
    const respuesta = await informacionModels.find({usuario:id,country:{$regex:"^"+ country,$options:'i'}})
    res.json(respuesta)
}



informacionCtrl.buscarPorCoincidencia = async (req,res)=>{
    const {country} = req.params;
    const respuesta = await informacionModels.find({country:{$regex:".*"+ country}})
    res.json(respuesta)
}

informacionCtrl.buscarPorCoincidenciaMayusculas = async (req,res)=>{
    const {country} = req.params;
    const respuesta = await informacionModels.find({country:{$regex:"^"+ country,$options:'i'}})
    res.json(respuesta)
}

//eliminar

informacionCtrl.elimarinformacion = async(req,res)=>{
    const id = req.params.id
    await informacionModels.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'informacion eliminado'
    })
}


//actualizar

informacionCtrl.actualizarinformacion= async(req,res)=>{
    const id = req.params.id 
    await informacionModels.findByIdAndUpdate({_id:id},req.body)
    const respuesta =await informacionModels.findById({_id:id})
    res.json({
        mensaje: 'informacion actualizado',
        respuesta
    })
} 


module.exports= informacionCtrl
