const express = require("express");
const app = express();
const db = require('./db');
var cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/tranquility", (req, res) => {
    db.query("SELECT * FROM tranquility", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.get("/whatever", (req, res) => {
    db.query("SELECT * FROM whatever", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.get("/am", (req, res) => {
    db.query("SELECT * FROM am", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.listen(3000);