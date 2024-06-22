//IMPORTANT Concept
//This is for understanding the concept of protected routes in simple terms,
//(If authentication is successful, the middleware may also perform 
//authorization checks to ensure the authenticated user has the necessary permissions
//to access the /protected route).
//Depending on the role of the user, specific routes are only allowed to be accessed.


const express = require('express')
const ProtectedRoute = express.Router()
const AuthMiddleware = require('./AuthMiddleware')

ProtectedRoute.get('/protected', AuthMiddleware, (req, res) => {
  res.json({ message: 'This is a protected route' })
});

module.exports = ProtectedRoute;
