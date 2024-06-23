const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/Users.model")

const router = express.Router()

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    const exist_email = await User.findOne( { where: { email: email } } )

    if (name.length > 100) {
        res.status(422).json({error: "name should be in under 100 char"})
    }
    if (email.length > 100) {
        res.status(422).json({error: "email should be in under 100 char"})
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
        res.status(401).json({message: "Email already exist"})
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const exist_email = await User.findOne( { where: { email: email } } )
        if (exist_email != null) {

            const password_hash = await User.findOne({where: { email : email }, attributes: ['password']})
            const result_password = bcrypt.compareSync(password, password_hash.getDataValue('password'))

            if (result_password) {
                res.status(200).json({message: "you are logged in successfully"})
            } else {
                res.status(401).json({message: "invalid login credentials"})
            }
        } else {
            res.status(301).json({message: "invalid login credentials"})
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = router
