const express = require("express");
const { connectDb } = require("./helpers/db");
const mongoose = require("mongoose")
const axios = require("axios");
const { host, port, authAPIUrl, mailerAPIUrl } = require("./configuration");
const app = express();

const PostSchema = new mongoose.Schema({
    name: String
});
const Post = mongoose.model("Post", PostSchema)

const PORT = process.env.PORT
const HOST = process.env.HOST

const startServer = () => {
    app.listen(port, () => {
        console.log("Started api service")
    });
}

app.get("/testcurrentUser", (req, res) => {

    axios.get(authAPIUrl + "/currentUser").then(response => {

        axios.post(mailerAPIUrl, {
            message_context: response.data,
            message_text: 'пользователь зарегистрировался!'
          })

        res.json({
            currentUserFFromData: response.data,
            testAuth: true
        });
    });
});

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once("open", startServer);