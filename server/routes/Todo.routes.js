const express = require("express")
const TodoList = require("../models/TodoList.model.js")
const User = require("../models/Users.model.js")
const validator = require("validator")
const { default: isBoolean } = require("validator/lib/isBoolean.js")

const router = express.Router()

//  NOTE: Get Todo list
router.get("/user/:user_id", async (req, res) => {
    let user_id = req.params.user_id
    let exist_user;
    if (validator.isUUID(user_id)) {
        try {
            exist_user = await User.findOne({ where: { id: user_id } })
            if (exist_user != null) {
                let todoData = await TodoList.findAll({ where: { user_id: user_id } })
                // let todo_item = []
                // for (let i = 0; i < todoData.length; i++) {
                //     todo_item.push(todoData[i].dataValues.task)
                // }
                res.status(200).json(todoData)
            } else {
                res.status(404).json({ error: "User not found" })
            }
        } catch (err) {
            res.status(500).json({ error: "something went wrong!!!" })
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
            await todo.save()
            res.status(201).json({ message: "Todo has been added!" })
        } catch (err) {
            res.status(500).json({ error: "something went wrong!!!" })
        }
    } else {
        res.status(404).json({ error: "something went wrong" })
    }
})

//  NOTE: Delete for todo list (check whether completed or not)
router.delete("/user/:user_id/todo/:todo_id", async (req, res) => {
    let user_id = req.params.user_id
    let todo_id = req.params.todo_id
    if (validator.isUUID(user_id) && validator.isUUID(todo_id)) {
        try {
            let del_todo = await TodoList.destroy({ where: { id: todo_id } })
            if (del_todo) {
                res.status(200).json({ message: "The todo has been deleted" })
            } else {
                res.status(301).json({ message: "the todo does not exist" })
            }
        } catch (err) {
            res.status(401).json({ error: "something went wrong" })
        }
    }
})

module.exports = router
