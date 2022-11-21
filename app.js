const express = require("express");
const jsonfile = require("jsonfile");
const cors = require('cors')
const ordersFile = "./orders.json";
const paymentsFile = "./payments.json";
const pricesFile = "./prices.json";
const port = process.env.PORT || 3000;
const app = express();

app.use(cors())


app.get("/orders",cors(), function (req, res) {
    //res.send("Hello World");
    jsonfile.readFile(ordersFile, function (err, obj) {
        if (err) res.send(err);
        res.send(obj);
    });
});

app.get("/payments", cors(),function (req,res) {
    jsonfile.readFile(paymentsFile, function (err, obj) {
        if (err) res.send(err);
        res.send(obj);
    });
});

app.get("/prices", cors(),function (req,res) {
    jsonfile.readFile(pricesFile, function (err, obj) {
        if (err) res.send(err);
        res.send(obj);
    });
});


app.listen(port)
