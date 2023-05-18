const router = require('express').Router()
const passport = require('passport')


const usersServices = require('./users.services')

require('../middlewares/auth.middlewares')(passport)

//? Rutas Raiz >> USERS
router.get('/', usersServices.getAllUsers)


//? Rutas dinamicas por ID
//? Ruta de informacion del propia del usuario loggeado
router.route('/me')
    .get(passport.authenticate('jwt', {session: false}), usersServices.getMyUser)
    .patch(passport.authenticate('jwt', {session: false}), usersServices.pathMyUser)
    .delete(passport.authenticate('jwt', {session: false}), usersServices.deleteMyUser)

router.route('/:id')
    .get(usersServices.getUserByID)
    .patch(usersServices.pathUser)
    .delete(usersServices.deleteuser)







module.exports = router

