const router = require('express').Router()

const usersServices = require('./users.services')


//? Rutas Raiz >> USERS
router.get('/', usersServices.getAllUsers)

//? Rutas dinamicas por ID

router.route('/:id')
    .get(usersServices.getUserByID)
    .patch(usersServices.pathUser)
    .delete(usersServices.deleteuser)



