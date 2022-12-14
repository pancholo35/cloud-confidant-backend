const { User, Journal, Page } = require('../models')

const getAllJournals = async (req, res) => {
  try {
    const journals = await Journal.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['username', 'email']
        },
        {
          model: Page,
          as: 'pages'
        }
      ]
    })
    res.send(journals)
  } catch (error) {
    throw error
  }
}

const getJournalById = async (req, res) => {
  try {
    const journal = await Journal.findByPk(req.params.journal_id, {
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['username', 'email']
        },
        {
          model: Page,
          as: 'pages'
        }
      ]
    })
    res.send(journal)
  } catch (error) {
    throw error
  }
}

const getJournalByUserId = async (req, res) => {
  try {
    const journal = await Journal.findAll({
      where: { userId: req.params.user_id }
    })
    res.send(journal)
  } catch (error) {
    throw error
  }
}

const createJournal = async (req, res) => {
  try {
    const journal = await Journal.create({ ...req.body })
    res.send(journal)
  } catch (error) {
    throw error
  }
}

const updateJournal = async (req, res) => {
  try {
    const journal = await Journal.update(
      { ...req.body },
      { where: { id: req.params.journal_id }, returning: true }
    )
    res.send(journal)
  } catch (error) {
    throw error
  }
}

const deleteJournal = async (req, res) => {
  try {
    await Journal.destroy({ where: { id: req.params.journal_id } })
    res.send({
      msg: 'Journal Deleted',
      payload: req.params.journal_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllJournals,
  getJournalById,
  getJournalByUserId,
  createJournal,
  updateJournal,
  deleteJournal
}
