const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Оценки_компетенций = sequelize.define('оценки_компетенций',{
    "id_оценки":  {
        type: Sequelize.INTEGER,
    },
    "код_компетенции": {
        type: Sequelize.STRING,
    },
    "терм": {
        type: Sequelize.STRING,
    },
})

module.exports = Оценки_компетенций