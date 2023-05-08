const {Router} = require('express');
const router = Router();
const usuarioCtrl = require('../controller/usuario.controller');

router.post('/crearUsuario',usuarioCtrl.crearUsuario);
router.post('/login',usuarioCtrl.login);


module.exports= router