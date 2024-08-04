const express = require("express")
const TodoList = require("../models/TodoList.model.js")
const createError = require('http-errors');
const User = require("../models/Users.model.js")
const { validateTodosParams, validateUUID, todoSchema } = require("../utils/validation_schema.js");
const authenticateToken = require('../utils/jwt-helper.js');

const router = express.Router()

//  NOTE: Get Todo list

router.get("/user/:user_id", authenticateToken.authenticateToken, async (req, res, next) => {
    try {
        let resUserId = await validateUUID.validateAsync(req.params);
        if (!resUserId) throw createError.NotFound("the username is not found")

        const user_exist = await User.findOne({ where: { id: resUserId.user_id } });
        if (!user_exist) throw createError.NotFound("The user is not found")

        const todoData = await TodoList.findAll({ where: { user_id: resUserId.user_id } });
        res.send({ todoData });
    } catch (error) {
        if (error.isJoi === true) return next(createError.BadRequest('Invalid UserID'));
        next(error);
    }
})

//  NOTE: Post Todo list

router.post("/user/:user_id", authenticateToken.authenticateToken, async (req, res, next) => {
    try {
        const resUserId = await validateUUID.validateAsync(req.params);
        if (!resUserId) throw createError.NotFound("User not found");

        const user_exist = await User.findOne({ where: { id: resUserId.user_id } });
        if (!user_exist) throw createError.NotFound("User not found");

        const todo = await TodoList.create({
            user_id: resUserId.user_id,
            task: req.body.task,
        })
        const saveTodo = await todo.save();
        res.send({ saveTodo })
    } catch (error) {
        if (error.isJoi === true) return next(createError.BadRequest('Invalid UserID'));
        next(error);
    }
})

//  NOTE: Edit Todo List

router.put('/user/:user_id/todo/:todo_id', authenticateToken.authenticateToken, async (req, res, next) => {
    try {
        const result = await validateTodosParams.validateAsync(req.params)
        if (!result) throw createError.Unauthorized("No a valid todo/user ID")

        const validTodos = await todoSchema.validateAsync(req.body)
        if (!validTodos) throw createError.Unauthorized("Not a valid input")

        const todo = await TodoList.update(
            { completed: validTodos.completed },
            { where: { id: result.todo_id } }
        )

        res.send({ todo })

    } catch (error) {
        if (error.isJoi === true) return next(createError.BadRequest('Invalid UserID/TodoID'));
        next(error);
    }
})


module.exports = router
