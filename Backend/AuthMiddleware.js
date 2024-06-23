const jwt = require('jsonwebtoken')
require('dotenv').config()

const secret = process.env.SECRET

const AuthMiddleware = (req, res, next) => {
  const token = req.cookies.token

  if (!token) {
    return res.status(401).json({ error: 'No token provided' })
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to authenticate token' })
    }

    req.userId = decoded.userId
    next()
  })
};

module.exports = AuthMiddleware;
