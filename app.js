const express = require('express')
const debug = require("debug")("app");
const path = require("path");


const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,"/public/")))

app.get('/', (req, res) => {
    res.send('Hello pond!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})