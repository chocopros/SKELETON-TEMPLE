//? Dependencies
const uuid = require('uuid')
const Users = require('../models/users.models');
const {hashPassword} = require('../utils/crypto')


//> CREATE NEW USERS

const createNewUser = async (data) => {
    const userUUID = uuid.v4()
    const newUser = await Users.create({
        id: userUUID,
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        birthday: data.birthday,
        email: data.email,
        password: hashPassword(data.password),
        status: "active",
        isValidated: true
    })
    return newUser
    
};



//> GET ALL USERS
const getAllUsers = async () => {
    const user = await Users.findAll()
    return user
};

//> GET USER BY ID
const getUserByID = async(id) => {
    const user = await Users.findOne({
        where: {
            id
        }
    });
    return user;
};

//> UPDATE USER
const updateUser = async(id, data) => {
    const result = await Users.update(data, {
        where: {
            id
        }
    })
    return result
};

//> DELETE USER
const destroyUser = async(id) => {
    return await Users.destroy({
        where: {
            id
        }
    })
};

module.exports = {
    createNewUser,
    getAllUsers,
    getUserByID,
    updateUser,
    destroyUser
}

// **TEST** //

//> CREATE NEW USERS
/*
createNewUser({

    firstName: "Jesus",
    lastName: "Arechider",
    birthday: "1993-12-01",
    email: "jesuschock1993@gmail.com",
    password: "123456"
})
*/
//>DELETE USER
/*
destroyUser('6ae11a17-f00a-465b-b988-f116d49f53b9')
*/