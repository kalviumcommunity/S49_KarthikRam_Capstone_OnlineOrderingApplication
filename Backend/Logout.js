const express = require('express')
const logoutRoute = express.Router()

logoutRoute.post('/logout', (req, res) => {
  res.cookie('token', '', { maxAge: 0 })
  res.json({ message: 'Logout successful' })
})

module.exports = logoutRoute;