const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Функция_принадлежности = sequelize.define('функция_принадлежности',{
    "функция_принадлежности": {
        type: Sequelize.INTEGER,
    },
    "название": {
        type: Sequelize.STRING,
    },
})

module.exports = Функция_принадлежности