const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Оценки_зув = sequelize.define('оценки_зув',{
    "id_оценки": {
        type: Sequelize.STRING,
    },
    "код_зув": {
        type: Sequelize.STRING,
    },
    "значение_оценки": {
        type: Sequelize.STRING,
    },
})

module.exports = Оценки_зув