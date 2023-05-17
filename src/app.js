//?Dependencies
const express = require('express');

//? Initial Configs
const app = express();
const db = require('./utils/database')
const initModels = require('./models/initModels')
//> use format JSON
app.use(express.json());

//> ROUTES
const useRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')

//DATABASE AUTH AND SYNC
db.authenticate()
    .then(() => console.log('DATABASE AUTHENTIFICATED'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('DATA BASE SYNCED!!'))
    .catch(err => console.log(err))

initModels()

app.get('/', (req, res, next) => {
    console.log(req.method)
    next()
}, (req, res) => {
    res.status(200).json({
        STATUS_SERVER: "OK!!!",
        users: `http://localhost:${port}/api/v1/users`
    })
});


//> >>>ROUTER USE<<<
app.use('/api/v1/users',useRouter); //? users
app.use('/api/v1/auth', authRouter); //? auth


//> SERVER LISTEN
const {port} = require('./config')
app.listen(port,() => {
    console.log(`Server Started on PORT=${port}`)
});