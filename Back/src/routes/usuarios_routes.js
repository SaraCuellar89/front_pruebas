const express = require('express');
const router = express.Router();
const {auth} = require('../middlewares')


// ================== Importacion de Controladores ==================
const {registrar_usuarios, 
    iniciar_sesion,
    iniciar_sesion_google,
    informacion_usuario_token, 
    editar_cuenta,
    eliminar_cuenta} = require("../controllers/usuarios_controller")


// ================== Rutas ==================

// Registrar un usuario
router.post('/registrar', registrar_usuarios);
// Iniciar sesion
router.post('/iniciar_sesion', iniciar_sesion);
// Iniciar sesion Google
router.post('/iniciar_sesion_google', iniciar_sesion_google);
// Buscar informacion de un usuario en sesion por medio del token
router.get('/usuario_logueado', auth, informacion_usuario_token)
// Editar la informacion de la cuenta
router.put('/editar_cuenta/:id_usuario', editar_cuenta);
// Eliminar la cuenta
router.delete('/eliminar_cuenta/:id_usuario', eliminar_cuenta);



// ================== Exportar funciones ==================
module.exports = router;