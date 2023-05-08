const {Router} = require('express');
const router = Router();
const informacionCtrl = require('../controller/informacion.controller');
const auth = require('../helper/auth');

router.post('/crearInformacion',informacionCtrl.crearinformacion);
router.get('/listarInformacion',informacionCtrl.listar)
router.get('/listarInformacionId/:id',informacionCtrl.listarId)
router.get('/listarInformacionCedula/:cedula',informacionCtrl.listarCedula)
router.get('/listarInformacionPorusuario/:id',auth.verificarToken,informacionCtrl.informacionsDeUnusuario)
router.get('/listarInformacionPorUsuarioFiltro/:id/:country',informacionCtrl.informacionsDeUnusuarioBuscar)
router.get('/buscarPorCoincidenciainformacion/:country',informacionCtrl.buscarPorCoincidencia)
router.get('/buscarPorCoincidenciainformacionMayusculas/:country',informacionCtrl.buscarPorCoincidenciaMayusculas)
router.delete('/eliminarInformacion/:id',informacionCtrl.elimarinformacion)
router.put('/actualizarInformacion/:id' ,informacionCtrl.actualizarinformacion)

module.exports= router