const express = require("express");
const bodyParser = require('body-parser');
const { host, port } = require("./configuration");
const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT
const HOST = process.env.HOST


app.listen(port, () => {
    console.log("Started mailer service")
});

app.post("/", (req, res) => {
    
    console.log("Сообщение отправлено =>\nТекст сообщения: " + req.body.message_text + "\nКонтекст: " + JSON.stringify(req.body.message_context, null, Infinity));
});