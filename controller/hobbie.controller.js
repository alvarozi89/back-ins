const hobbieCtrl = {}
const hobbieModels= require('../models/hobbie.models')

hobbieCtrl.crearHobbie = async(req,res)=>{
    const{nombre,usuario}= req.body
    const nuevohobbie = new hobbieModels({
        nombre,usuario
    })
    const respuesta = await nuevohobbie.save()
    res.json({
        mensaje: 'hobbie creado',
        respuesta
    })
}

hobbieCtrl.listar = async(req,res)=>{
    const respuesta = await hobbieModels.find()
    res.json(respuesta)
}

hobbieCtrl.listarId = async(req,res)=>{
    const id = req.params.id
    const respuesta =await hobbieModels.findById({_id:id})
    res.json(respuesta)
}


hobbieCtrl.hobbiesDeUnusuario = async(req,res)=>{
    const id = req.params.id
    const respuesta = await hobbieModels.find({usuario:id})
    res.json(respuesta)
}

hobbieCtrl.hobbiesDeUnusuarioBuscar = async(req,res)=>{
    const id = req.params.id
    const {nombre} = req.params;
    const respuesta = await hobbieModels.find({usuario:id,nombre:{$regex:"^"+ nombre,$options:'i'}})
    res.json(respuesta)
}


hobbieCtrl.buscarPorCoincidencia = async (req,res)=>{
    const {nombre} = req.params;
    const respuesta = await hobbieModels.find({nombre:{$regex:".*"+ nombre}})
    res.json(respuesta)
}

hobbieCtrl.buscarPorCoincidenciaMayusculas = async (req,res)=>{
    const {nombre} = req.params;
    const respuesta = await hobbieModels.find({nombre:{$regex:"^"+ nombre,$options:'i'}})
    res.json(respuesta)
}

//eliminar

hobbieCtrl.elimarHobbie = async(req,res)=>{
    const id = req.params.id
    await hobbieModels.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'hobbie eliminado'
    })
}


//actualizar

hobbieCtrl.actualizarHobbie= async(req,res)=>{
    const id = req.params.id 
    await hobbieModels.findByIdAndUpdate({_id:id},req.body)
    const respuesta =await hobbieModels.findById({_id:id})
    res.json({
        mensaje: 'hobbie actualizado',
        respuesta
    })
} 


module.exports= hobbieCtrl
