const { Journal, Page } = require('../models')

const getAllPages = async (req, res) => {
  try {
    const pages = await Page.findAll({
      include: [
        {
          model: Journal,
          as: 'journal'
        }
      ]
    })
    res.send(pages)
  } catch (error) {
    throw error
  }
}

const getPageById = async (req, res) => {
  try {
    const page = await Page.findByPk(req.params.page_id, {
      include: [
        {
          model: Journal,
          as: 'journal'
        }
      ]
    })
    res.send(page)
  } catch (error) {
    throw error
  }
}

const getPageByJournalId = async (req, res) => {
  try {
    const page = await Page.findAll({
      where: { journalId: req.params.journal_id },
      include: [
        {
          model: Journal,
          as: 'journal'
        }
      ]
    })
    res.send(page)
  } catch (error) {
    throw error
  }
}

const createPage = async (req, res) => {
  try {
    const page = await Page.create({ ...req.body })
    res.send(page)
  } catch (error) {
    throw error
  }
}

const updatePage = async (req, res) => {
  try {
    const page = await Page.update(
      { ...req.body },
      { where: { id: req.params.page_id }, returning: true }
    )
    res.send(page)
  } catch (error) {
    throw error
  }
}

const deletePage = async (req, res) => {
  try {
    await Page.destroy({ where: { id: req.params.page_id } })
    res.send({
      msg: 'Page Deleted',
      payload: req.params.page_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllPages,
  getPageById,
  getPageByJournalId,
  createPage,
  updatePage,
  deletePage
}
