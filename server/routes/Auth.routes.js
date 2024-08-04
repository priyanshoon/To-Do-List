const express = require("express");
const createError = require('http-errors');
const bcrypt = require("bcryptjs");
const User = require("../models/Users.model")
const { accessTokens } = require("../middleware/Auth.middleware.js");
const { authRegisterSchema, authLoginSchema } = require("../utils/validation_schema.js");

const router = express.Router()

//  NOTE: Register route

router.post("/register", async (req, res, next) => {
    try {
        const result = await authRegisterSchema.validateAsync(req.body);
        const exist_email = await User.findOne({ where: { email: result.email } })

        if (exist_email)
            throw createError.Conflict(`${result.email} is already been registered`);

        const user = await User.create(result)
        const savedUser = await user.save();
        const accessToken = accessTokens(savedUser);

        res.send({ savedUser, accessToken });
    } catch (error) {
        if (error.isJoi === true) error.status = 422;
        next(error);
    }
});

//  NOTE: Login route

router.post("/login", async (req, res, next) => {
    try {
        const result = await authLoginSchema.validateAsync(req.body);
        const user = await User.findOne({ where: { email: result.email } });
        if (!user) throw createError.NotFound('User not register');

        const isMatch = bcrypt.compareSync(result.password, user.password);

        if (!isMatch) throw createError.Unauthorized('Email/Password not valid')

        const accessToken = accessTokens(user);

        res.send({ accessToken })
    } catch (error) {
        if (error.isJoi === true)
            return next(createError.BadRequest('Invalid email/password'));
        next(error);
    }
})

module.exports = router
