const usersControllers = require('./users.controllers')


const getAllUsers = ( req, res ) => {
    usersControllers.getAllUsers()
        .then(r => {res.status(200).json(r)})
        .catch(err => {res.status(400).json({message: err.message})})
};

const getUserByID = ( req, res ) => {
    const id = req.params.id
    usersControllers.getUserByID(id)
        .then(r => {res.status(200).json(r)})
        .catch(err => {res.status(404).json({message: err.message})})
};

const pathUser = ( req, res ) => {
    const id = req.params.id
    const {firstName, lastName, gender, birthday, email, password} = req.body
    usersControllers.updateUser(id,{firstName, lastName, gender, birthday, password})
        .then(r => {res.status(200).json(r)})
        .catch(err => {res.status(400).json({message: err.message})})
};      