const express = require("express");
const bodyParser = require('body-parser');
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT;
const authPage = require("./routes/Auth.routes");

app.use("/api/", authPage);

app.listen(PORT, (error) => {
    if (!error) {
        console.log("Server is up at port : ", PORT);
    } else {
        console.log("Server failure", error);
    }
});
