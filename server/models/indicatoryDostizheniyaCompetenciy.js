const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Индикаторы_достижения_компетенций = sequelize.define('индикаторы_достижения_компетенций',{
    код_индикатора: {
        type: Sequelize.STRING,
    }, 
    формулировка_индикатора: {
        type: Sequelize.STRING,
    },
    код_компетенции: {
        type: Sequelize.STRING,
    },
})

module.exports = Индикаторы_достижения_компетенций