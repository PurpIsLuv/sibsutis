const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Нечеткая_классфикация_зув = sequelize.define('нечеткая_классфикация_зув',{
    "оценка_соответствия": {
        type: Sequelize.FLOAT,
    },
    "код_зув": {
        type: Sequelize.STRING,
    },
    "код_задания": {
        type: Sequelize.INTEGER,
    },
})

module.exports = Нечеткая_классфикация_зув