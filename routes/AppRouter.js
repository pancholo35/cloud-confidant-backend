const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const JournalRouter = require('./JournalRouter')
const PageRouter = require('./PageRouter')
const AuthRouter = require('./AuthRouter')

Router.use('/users', UserRouter)
Router.use('/journals', JournalRouter)
Router.use('/pages', PageRouter)
Router.use('/auth', AuthRouter)

module.exports = Router
