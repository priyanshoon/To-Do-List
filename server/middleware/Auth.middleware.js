const jwt = require('jsonwebtoken');

const accessTokens = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET_KEY, {
        expiresIn: '2h'
    })
}

//  TODO: Verify token
const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        return { success: true, data: decoded }
    } catch (err) {
        return { success: false, error: err }
    }
}

module.exports = { accessTokens, verifyToken }
