const express = require("express")
const TodoList = require("../models/TodoList.model.js")
const User = require("../models/Users.model.js")
const validator = require("validator")

const router = express.Router()

//  NOTE: Get Todo list
router.get("/user/:user_id", async (req, res) => {
    let user_id = req.params.user_id
    let exist_user;
    if (validator.isUUID(user_id)) {
        exist_user = await User.findOne({ where: { id: user_id } })
        if (exist_user != null) {
            let todoData = await TodoList.findAll({ where: { user_id: user_id } })
            let todo_item = []
            for (let i = 0; i < todoData.length; i++) {
                todo_item.push(todoData[i].dataValues.task)
            }
            res.status(200).json({ tasks: todo_item })
        } else {
            res.status(404).json({ error: "User not found" })
        }
    } else {
        res.status(404).json({ error: "User not found" })
    }
})

//  NOTE: Post Todo list
router.post("/user/:user_id", async (req, res) => {
    let user_id = req.params.user_id
    if (validator.isUUID(user_id)) {
        try {
            let todo = await TodoList.create({
                user_id: user_id,
                task: req.body.task,
            })
            todo.save()
            res.status(201).json({ message: "Todo has been added!" })
        } catch (err) {
            res.status(500).json({ error: "something went wrong!!!" })
        }
    } else {
        res.status(404).json({ error: "something went wrong" })
    }
})

module.exports = router
