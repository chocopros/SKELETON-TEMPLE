//?Dependencies
const express = require('express');

//? Initial Configs
const app = express();
//> use format JSON
app.use(express.json())



app.get('/', (req, res) => {
    res.status(200).json({
        STATUS_SERVER: "OK!!!",
        users: `http://localhost:${port}/api/v1/users`
    })
})


const {port} = require('./config')
app.listen(port,() => {
    console.log(`Server Started on PORT=${port}`)
});