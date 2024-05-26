const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/Users.model")

const router = express.Router()


router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    if (name.length > 100) {
        res.status(422).json({error: "name should be in under 100 char"})
    }
    if (email.length > 100) {
        res.status(422).json({error: "email should be in under 100 char"})
    }
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
});

router.post("/login", async (req, res) => {

})

module.exports = router
