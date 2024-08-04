const jwtAuth = require('../middleware/Auth.middleware');
const createError = require('http-errors');


const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return next(createError.Unauthorized());
    }

    const result = jwtAuth.verifyToken(token);

    if (!result.success) {
        return res.status(403).json({ error: result.error });
    }

    req.user = result.data;
    next();

}

module.exports = { authenticateToken }
