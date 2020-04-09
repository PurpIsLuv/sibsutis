const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Контрольные_задания = sequelize.define('контрольные_задания',{
    "код_задания": {
        type: Sequelize.INTEGER,
    },
    "текст_задания": {
        type: Sequelize.STRING,
    },
    "тип_задания": {
        type: Sequelize.STRING,
    },
})

module.exports = Контрольные_задания