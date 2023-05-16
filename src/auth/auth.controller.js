//? Dependencies
const { use } = require('passport');
const {getUserByEmail} = require('../users/users.controllers')
const {comparePassword} = require('../utils/crypto')
//* Email y Contrasena del Usuario

//? Email is unique in the DB

const loginUser = async (email, pass) => {
    const userEmail = await getUserByEmail(email)
        .then(user => {
            if (user !== null) {
                const validation = comparePassword(pass, user.password)
                if (validation) {
                    console.log(user.dataValues)
                    return user
                } else {
                    console.log('Password incorrecto')
                }             
            } else {
                console.log(`USER NO REGISTER: ${email}`)
            }
        })
        .catch(err => {
            err => console.log(err)
        })
};

module.exports = {
    loginUser
}


//? TEST
/*
loginUser('jarechider@jdmgroupcompany.com','p4s2W0rd*k3y')
*/
    


