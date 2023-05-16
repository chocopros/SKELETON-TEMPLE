//? Dependencies
const {getUserByEmail} = require('../users/users.controllers')
const {comparePassword} = require('../utils/crypto')
//* Email y Contrasena del Usuario

//? Email is unique in the DB

const loginUser = async (email, pass) => {
    const data = await getUserByEmail(email)
        .then(user => {
            if (user !== null) {
                console.log(user.dataValues)
                return true
            } else {
                console.log('NO REGISTERED')
            }
        })
        .catch(err => {
            err => console.log(err)
        })

   
};

loginUser('jarechider3@jdmgroupcompany.com','root')
    


