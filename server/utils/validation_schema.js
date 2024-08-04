const joi = require('joi');

const authRegisterSchema = joi.object({
    name: joi.string().max(100).required(),
    email: joi.string().email().max(100).lowercase().required(),
    password: joi.string().min(2).required(),
})

const authLoginSchema = joi.object({
    email: joi.string().email().lowercase().required(),
    password: joi.string().min(2).required(),
})

const validateUUID = joi.object({
    user_id: joi.string().uuid()
})

const validateTodosParams = joi.object({
    todo_id: joi.string().uuid().required(),
    user_id: joi.string().uuid().required(),
})

const todoSchema = joi.object({
    task: joi.string().max(200),
    completed: joi.boolean().default(false)
})

module.exports = {
    authRegisterSchema,
    authLoginSchema,
    validateUUID,
    validateTodosParams,
    todoSchema
}

