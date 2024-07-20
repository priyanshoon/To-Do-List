const express = require("express")
const TodoList = require("../models/TodoList.model.js")
const User = require("../models/Users.model.js")

const router = express.Router()

//  NOTE: Get Todo list
router.get("/users/:user_id", async (req, res) => {
    let user_id = req.params.user_id
    if (User.findByPk(user_id) != null) {
        let todoData = await TodoList.findAll({ where: { user_id: user_id } })
    }
})

module.exports = router
