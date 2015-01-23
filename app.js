/**
 * Created by gil-arnaudcoche on 23/01/15.
 */
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var csv = require("ya-csv");

var app = express();
app.use(express.static(path.join(__dirname, "")));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/hello", function(request, response){
    response.sendFile(path.join(__dirname, "index.html"));
});

app.post("/booking", function(request, response) {
    console.log("Email: " + request.body.email);

    var fullName = request.body.fullName;
    var email = request.body.email;

    var database = csv.createCsvFileWriter("booking.csv", {"flags": "a"});

    var data = [fullName, email];

    database.writeRecord(data);
    database.writeStream.end();

    response.send("Name: " + request.body.fullName);
});

var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Julieta and GA's web application listening at http://%s:%s", host, port);
});