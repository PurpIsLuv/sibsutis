const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Эпитеты = sequelize.define('эпитеты',{
    "эпитет": {
        type: Sequelize.INTEGER,
    },
    "формулировка": {
        type: Sequelize.STRING,
    },
})

module.exports = Эпитеты