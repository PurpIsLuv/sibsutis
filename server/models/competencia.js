const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Компетенция = sequelize.define('компетенция',{
    код_компетенции: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    формулировка_компетенции: {
        type: Sequelize.STRING,
    },
    код_направления: {
        type: Sequelize.STRING,
    },
    тип_компетенции: {
        type: Sequelize.STRING,
    }
})

module.exports = Компетенция