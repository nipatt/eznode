const express = require('express')
const chalk = require("chalk")
const debug = require("debug")("app");
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello pond!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))