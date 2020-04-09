const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Переменные = sequelize.define('переменные',{
    "переменная": {
        type: Sequelize.INTEGER,
    },
    "функции_принадлежности": {
        type: Sequelize.INTEGER,
    },
    "формулировка": {
        type: Sequelize.STRING,
    },
})

module.exports = Переменные