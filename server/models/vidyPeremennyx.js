const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Виды_переменных = sequelize.define('виды_переменных',{
    код: {
        type: Sequelize.INTEGER,
    },
    вид: {
        type: Sequelize.STRING,
    },
})

module.exports = Виды_переменных