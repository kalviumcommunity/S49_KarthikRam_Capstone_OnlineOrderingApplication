const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const loginRoute = express.Router()
const SignInModel = require('../Backend/Models/SignInModel')
require('dotenv').config()

const secret = process.env.SECRET

loginRoute.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await SignInModel.findOne({ email })
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' })
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      secret,
      { expiresIn: '1h' }
    )

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600000
    });

    res.json({ message: 'Login successful', token })
  } catch (err) {
    console.error('Error during login:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
});

module.exports = loginRoute;