const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Функция_принадлежности_терм = sequelize.define('функция_принадлежности_терм',{
    "функция_принадлежности": {
        type: Sequelize.INTEGER,
    },
    "терм": {
        type: Sequelize.STRING,
    },
})

module.exports = Функция_принадлежности_терм