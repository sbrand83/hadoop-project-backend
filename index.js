const express = require('express')
const mysql = require('mysql')

const app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
