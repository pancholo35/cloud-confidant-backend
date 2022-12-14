const Router = require('express').Router()
const controller = require('../controllers/JournalController')
const middleware = require('../middleware')

Router.get('/', controller.getAllJournals)
Router.get('/user/:user_id', controller.getJournalByUserId)
Router.get('/:journal_id', controller.getJournalById)
Router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createJournal
)
Router.put(
  '/:journal_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateJournal
)
Router.delete(
  '/:journal_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteJournal
)

module.exports = Router
