const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

const mysqlCon = mysql.createConnection({
    host: "104.154.149.157",
    user: "root",
    password: ""
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
    let sampleJSON = {
        routes: [
            {
                name: "Route A",
                years: [
                    1314,
                    1415,
                    1516,
                    1617
                ],
                crimes: [
                    20,
                    50,
                    30,
                    10
                ]
            },
            {
                name: "Route B",
                years: [
                    1314,
                    1415,
                    1516,
                    1617
                ],
                crimes: [
                    40,
                    30,
                    50,
                    20
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
		    1314,
		    1415,
		    1516,
		    1617
		],
		crimes: [
		    20,
		    50,
		    30,
		    10
		]
        };
        res.json(sampleJSON);
    }
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
