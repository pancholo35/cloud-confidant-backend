const Router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/PageController')

Router.get('/', controller.getAllPages)
Router.get('/user/:journal_id', controller.getPageByJournalId)
Router.get('/:page_id', controller.getPageById)
Router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createPage
)
Router.put(
  '/:page_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updatePage
)
Router.delete(
  '/:page_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deletePage
)

module.exports = Router
