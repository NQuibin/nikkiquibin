'use strict';

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static('frontend'));

// var fs = require('fs');
// var https = require('https');

// var privateKey = fs.readFileSync('server.key');
// var certificate = fs.readFileSync('server.crt');
// var config = {
//     key: privateKey,
//     cert: certificate
// };

app.use(function (req, res, next){
    console.log("HTTP request", req.method, req.url, req.body);
    return next();
});

app.listen(3000, function () {
    console.log("HTTP on port 3000");
});

// https.createServer(config, app).listen(3000, function () {
//     console.log('HTTPS on port 3000');
// });
