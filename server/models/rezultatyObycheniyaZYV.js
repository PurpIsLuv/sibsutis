const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Результаты_обучения_зув = sequelize.define('результаты_обучения_зув',{
    "код_зув": {
        type: Sequelize.STRING,
    },
    "формулировка_зув": {
        type: Sequelize.STRING,
    },
    "тип_зув": {
        type: Sequelize.STRING,
    },
})

module.exports = Результаты_обучения_зув