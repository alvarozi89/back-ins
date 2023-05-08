const {Router} = require('express');
const router = Router();
const hobbieCtrl = require('../controller/hobbie.controller');
const auth = require('../helper/auth');

router.post('/crearHobbie',hobbieCtrl.crearHobbie);
router.get('/listarHobbie',hobbieCtrl.listar)
router.get('/listarHobbieId/:id',hobbieCtrl.listarId)
router.get('/listarHobbiePorUsuario/:id',auth.verificarToken,hobbieCtrl.hobbiesDeUnusuario)
router.get('/listarHobbiePorUsuarioFiltro/:id/:country',hobbieCtrl.hobbiesDeUnusuarioBuscar)
router.get('/buscarPorCoincidenciahobbie/:country',hobbieCtrl.buscarPorCoincidencia)
router.get('/buscarPorCoincidenciahobbieMayusculas/:country',hobbieCtrl.buscarPorCoincidenciaMayusculas)
router.delete('/eliminarHobbie/:id',hobbieCtrl.elimarHobbie)
router.put('/actualizarHobbie/:id' ,hobbieCtrl.actualizarHobbie)

module.exports= router