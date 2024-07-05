const jwt = require('jsonwebtoken');

//  TODO: Create JWT middleware for authentication

const tokens = (user_id) => {
    return jwt.sign({ id: user_id }, process.env.JWT_SECRET_KEY, {
        expiresIn: '300s'
    })
}

const verifyToken = (user_id) => {
}

module.exports = { tokens }
