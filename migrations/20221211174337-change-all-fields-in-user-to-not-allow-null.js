'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('users', 'username', {
      type: Sequelize.STRING,
      allowNull: false
    })
    await queryInterface.changeColumn('users', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    })
    await queryInterface.changeColumn('users', 'passwordDigest', {
      type: Sequelize.STRING,
      allowNull: false
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('users', 'username', {
      type: Sequelize.STRING
    })
    await queryInterface.changeColumn('users', 'email', {
      type: Sequelize.STRING
    })
    await queryInterface.changeColumn('users', 'passwordDigest', {
      type: Sequelize.STRING
    })
  }
}
