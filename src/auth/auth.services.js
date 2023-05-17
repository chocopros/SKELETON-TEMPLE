const jwt = require('jsonwebtoken')

const {loginUser} = require('./auth.controller')

const login = ( req, res) => {
    const {email, password} = req.body
    
    if (!email || !password) return res.status(400).json({
        message: 'Missing Data',
        info: {
            "email": "jarechider@jdmgroupcompany.com",
            "password": "p4s2W0rd*k3y"
        }
    })

    loginUser(email, password)
        .then(r => {
            if (r) {
                const token = jwt.sign({
                    id: r.id,
                    email: r.email,
                    role: r.role
                },"claveSecreta")
                res.status(200).json({message: "Correct Credentials", token})
            } else {
                res.status(401).json({message: 'Invalid Crdeentials'})
            }
        })
        .catch(err => res.status(400).json({message: err}))

};

module.exports = {
    login
}