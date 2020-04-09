const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Оценки_основных_лп = sequelize.define('оценки_основных_лп',{
    "id_студента": {
        type: Sequelize.INTEGER,
    },
    "переменная": {
        type: Sequelize.INTEGER,
    },
    "оценка_f": {
        type: Sequelize.STRING,
    },
    "оценка_d": {
        type: Sequelize.STRING,
    },
})

module.exports = Оценки_основных_лп