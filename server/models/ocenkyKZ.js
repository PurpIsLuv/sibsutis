const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Оценки_кз = sequelize.define('оценки_кз',{
    "id_оценки": {
        type: Sequelize.INTEGER,
    },
    "код_задания": {
        type: Sequelize.INTEGER,
    },
    "значение_оценки": {
        type: Sequelize.STRING,
    },
})

module.exports = Оценки_кз