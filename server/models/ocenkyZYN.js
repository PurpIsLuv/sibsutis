const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Оценки_зун = sequelize.define('оценки_зун',{
    "id_студента": {
        type: Sequelize.INTEGER,
    },
    "зун": {
        type: Sequelize.STRING,
    },
    "оценка_F": {
        type: Sequelize.STRING,
    },
    "оценка_D": {
        type: Sequelize.STRING,
    },
})

module.exports = Оценки_зун