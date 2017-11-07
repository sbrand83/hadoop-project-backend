const express = require('express')
const mysql = require('mysql')

const app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})
