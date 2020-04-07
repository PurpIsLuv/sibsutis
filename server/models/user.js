const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Пользователь = sequelize.define("пользователь", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    почта: {
        type: Sequelize.STRING,
    },
    пароль: {
        type: Sequelize.STRING,
    },
    тип: {
        type: Sequelize.STRING,
    },
});

module.exports = Пользователь