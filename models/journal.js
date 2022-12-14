'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Journal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Journal.hasMany(models.Page, {
        as: 'pages',
        foreignKey: 'journalId',
        onDelete: 'CASCADE',
        hooks: true
      })
      Journal.belongsTo(models.User, { as: 'user', foreignKey: 'userId' })
    }
  }
  Journal.init(
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Journal',
      tableName: 'journals'
    }
  )
  return Journal
}
