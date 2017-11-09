const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

const mysqlCon = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "project"
});

mysqlCon.connect(function(err){
   if (err) throw err;
   console.log("Connected to mysql!"); 
}); 

app.use(cors());

app.get('/', function (req, res) {
    res.send('hello world');
});

app.get('/routes', function (req, res) {
    mysqlCon.query("SELECT DISTINCT routename FROM routecrimesbyyear", function(error, results, fields){
        res.json(results);
    });
});

app.get('/routes/:routeName', function (req, res) {
    if (req.params && req.params.routeName) {
        mysqlCon.query("SELECT * FROM routecrimesbyyear WHERE routename = '" + req.params.routeName + "'", function(error, results, fields){
	    res.json(results);
	});
    }
});

app.listen(8888, () => console.log('Example app listening on port 8888!'));
