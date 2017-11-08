const express = require('express');
const mysql = require('mysql');

const app = express();

const mysqlCon = mysql.createConnection({
    host: "localhost",
    user: "username",
    password: "password"
});

//mysqlCon.connect(function(err){
//    if (err) throw err;
//    console.log("Connected to mysql!");
//    
//}); 


app.get('/', function (req, res) {
    res.send('hello world');
});

app.get('/routes', function (req, res) {
    let sampleJSON = {
        routes: [
            {
                name: "Route A",
                years: [
                    1516
                ],
                crimes: [
                    20
                ]
            },
            {
                name: "Route B",
                years: [
                    1516
                ],
                crimes: [
                    22
                ]
            }
        ]
    };
    res.json(sampleJSON);
});

app.get('/routes/:routeName', function (req, res) {
    if (req.params && req.params.routeName) {
        let sampleJSON = {
            name: req.params.routeName,
            years: [
                1516
            ],
            crimes: [
                20
            ]
        };
        res.json(sampleJSON);
    }
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
