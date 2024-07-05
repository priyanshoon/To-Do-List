const express = require("express")
const TodoList = require("../models/TodoList.model.js")
const User = require("../models/Users.model.js")

const router = express.Router()

//  NOTE: Get Todo list
router.get("/todo_list/:user_id", (req, res) => {

})

