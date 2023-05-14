const usersControllers = require('./users.controllers')

const createUser = ( req, res ) => {
    const {firstName,lastName,birthday,email,password} = req.body

    if (firstName && lastName && gender && birthday && email && password) {
        usersControllers.createNewUser({firstName,lastName,gender,birthday,email,password})
            .then(r=> {res.status(201).json({r})})
            .catch( err => res.status(400).json({message: err.message}))
    } else {
        res.status(400).json({
            message: `Fail Fields Register`,
            example: {
                firstName: "string",
                lastName: "sring",
                birthday: "YYYY-MM-DD",
                email: "example@dominio.com",
                password: "p4s2W0rd*k3y"
            }
        })
    };
};


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
    const {firstName, lastName, gender, birthday} = req.body
    usersControllers.updateUser(id,{firstName, lastName, gender, birthday})
        .then(r => {
            if(r[0]){
                res.status(200).json({message: `User With ID: ${id}, >> Edited succesfully! <<`})
            } else {
                res.status(400).json({message: `Invalid ID`})
            }
        })
        .catch(err => {res.status(400).json({message: err.message})})
};

const deleteuser =  ( req, res ) => {
    const id = req.params.id
    usersControllers.destroyUser(id)
        then(r => {
            if(r){
                res.status(204).json({message: `User With ID: ${id}, >> eliminate succesfully! <<`})
            } else {
                res.status(400).json({message: `Invalid ID`})
            }
        })
        .catch(err => {res.status(400).json({message: err.message})})
};

module.exports = {
    createUser,
    getAllUsers,
    getUserByID,
    pathUser,
    deleteuser
}