'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Page extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Page.belongsTo(models.Journal, { as: 'journal', foreignKey: 'journalId' })
    }
  }
  Page.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      journalId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'journals',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Page',
      tableName: 'pages'
    }
  )
  return Page
}
