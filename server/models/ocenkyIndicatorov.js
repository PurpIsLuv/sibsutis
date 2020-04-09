const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Оценки_индикаторов = sequelize.define('оценки_индикаторов',{
    "id_оценки": {
        type: Sequelize.INTEGER,
    },
    "код_индикатора": {
        type: Sequelize.STRING,
    }, 
    "терм": {
        type: Sequelize.STRING,
    },
})

module.exports = Оценки_индикаторов