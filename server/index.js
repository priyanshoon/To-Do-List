const express = require("express");
const bodyParser = require('body-parser');
const createError = require('http-errors');
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT;
const authPage = require("./routes/Auth.routes");
const todoPage = require("./routes/Todo.routes");

app.use("/api/", authPage);
app.use("/api/", todoPage);

app.use(async (req, res, next) => {
    next(createError.NotFound());
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})

app.listen(PORT, (error) => {
    if (!error) {
        console.log("Server is up at port : ", PORT);
    } else {
        console.log("Server failure", error);
    }
});
