//? Dependencies
const { use } = require('passport');
const {getUserByEmail} = require('../users/users.controllers')
const {comparePassword} = require('../utils/crypto')
//* Email y Contrasena del Usuario

//? Email is unique in the DB

const loginUser = async (email,passwordPlain) => {
    try {
        const user = await getUserByEmail(email)

        const verifyPassword = comparePassword(passwordPlain, user.password)

        if (verifyPassword) {
            return user
        } else {
           return false 
        }

    } catch (err) {
        return err
    }
};



/*
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
                    return false
                }             
            } else {
                console.log(`USER NO REGISTER: ${email}`)
                return false
            }
        })
        .catch(err => {
            err => console.log(err)
        })
};
*/
module.exports = {
    loginUser
}


//? TEST
/*
loginUser('jarechider@jdmgroupcompany.com','p4s2W0rd*k3y1')
*/


