const router = require('express').Router()

const usersServices = require('./users.services')


//? Rutas Raiz >> USERS
router.get('/', usersServices.getAllUsers)
router.post('/', usersServices.createUser)
//? Rutas dinamicas por ID

router.route('/:id')
    .get(usersServices.getUserByID)
    .patch(usersServices.pathUser)
    .delete(usersServices.deleteuser)

module.exports = router

