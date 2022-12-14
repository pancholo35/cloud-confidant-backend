const { User, Journal, Page } = require('../models')

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Journal,
          as: 'journals',
          include: [
            {
              model: Page,
              as: 'pages'
            }
          ]
        }
      ]
    })
    res.send(users)
  } catch (error) {
    throw error
  }
}

const getUserById = async (req, res) => {
  try {
    const { user_id } = req.params
    const user = await User.findByPk(user_id, {
      include: [
        {
          model: Journal,
          as: 'journals',
          include: [
            {
              model: Page,
              as: 'pages'
            }
          ]
        }
      ]
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const updateUser = async (req, res) => {
  try {
    const user = await User.update(
      { ...req.body },
      { where: { id: req.params.user_id }, returning: true }
    )
    res.send(user)
  } catch (error) {
    throw error
  }
}

const deleteUser = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.user_id } })
    res.send({
      msg: 'User Deleted',
      payload: req.params.user_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
}
