const router = require('express').Router()
const passport = require('passport')


const usersServices = require('./users.services')

require('../middlewares/auth.middlewares')(passport)

//? Rutas Raiz >> USERS
router.get('/', passport.authenticate('jwt', {session: false}) , usersServices.getAllUsers)
//? Rutas dinamicas por ID

router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}),usersServices.getUserByID)
    .patch(usersServices.pathUser)
    .delete(usersServices.deleteuser)

module.exports = router

