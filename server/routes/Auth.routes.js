const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/Users.model")
const jwttoken = require("../middleware/Auth.middleware.js");

const router = express.Router()

//  NOTE: Register route
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    const exist_email = await User.findOne({ where: { email: email } })

    if (name.length > 100) {
        res.status(422).json({ error: "name should be in under 100 char" })
    }
    if (email.length > 100) {
        res.status(422).json({ error: "email should be in under 100 char" })
    }

    if (exist_email == null) {
        try {
            const saltRounds = 10;
            const hashPassword = await bcrypt.hash(password, saltRounds);
            // storing data into database
            const users = await User.create({
                name: name,
                email: email,
                password: hashPassword
            })
            users.save();
            res.status(201).json({ message: "User registered successfully." })
        } catch (error) {
            console.error('Error regarding user: ', error);
            res.status(500).json({ error: 'Failed to register user.' })
        }
    } else {
        console.log(exist_email)
        res.status(401).json({ message: "Email already exist" })
    }
});

//  NOTE: Login route
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } })
        if (user != null) {

            const password_hash = await User.findOne({ where: { email: email }, attributes: ['password'] })
            const result_password = bcrypt.compareSync(password, password_hash.getDataValue('password'))

            if (result_password) {
                const token = jwttoken.tokens(user_id = user.id);
                res.status(200).json({ message: "you are logged in successfully", userID: user.id, accessToken: token })
            } else {
                res.status(401).json({ message: "invalid login credentials" })
            }
        } else {
            res.status(301).json({ message: "invalid login credentials" })
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = router
