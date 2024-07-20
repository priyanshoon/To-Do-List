const express = require("express")
const TodoList = require("../models/TodoList.model.js")
const User = require("../models/Users.model.js")

const router = express.Router()

//  NOTE: Get Todo list
router.get("/users/:user_id", async (req, res) => {
    let user_id = req.params.user_id
    if (User.findByPk(user_id) != null) {
        let todoData = await TodoList.findAll({ where: { user_id: user_id } })
        let todo_item = []
        for (let i = 0; i < todoData.length; i++) {
            todo_item.push(todoData[i].dataValues.task)
        }
        res.status(200).json(todo_item)
    } else {
        res.status(404).send("User not found")
    }
})

//  NOTE: Post Todo list
router.post("/users/:user_id", async (req, res) => {

})

module.exports = router
