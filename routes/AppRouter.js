const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const AuthRouter = require('./AuthRouter')

Router.use('/users', UserRouter)
Router.use('/auth', AuthRouter)

module.exports = Router
