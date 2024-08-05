const express = require("express");
const { connectDb } = require("./helpers/db");
const mongoose = require("mongoose")
const { host, port } = require("./configuration");
const app = express();

const PORT = process.env.PORT
const HOST = process.env.HOST

const startServer = () => {
    app.listen(port, () => {
        console.log("Started auth service")
    });
}

app.get("/currentUser", (req, res) => {
    res.json({
        id: "123",
        email: "foo@gmail.com"
    });
});

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once("open", startServer);