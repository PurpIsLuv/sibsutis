const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Компоненты_правил = sequelize.define('компоненты_правил',{
    "нечеткий_дескриптор": {
        type: Sequelize.INTEGER,
    },
    "переменная": {
        type: Sequelize.INTEGER,
    },
    "вид_переменной": {
        type: Sequelize.INTEGER,
    },
    "инверсия(NOT)": {
        type: Sequelize.INTEGER,
    },
    "терм": {
        type: Sequelize.INTEGER,
    },
    "операция": {
        type: Sequelize.STRING,
    },
})

module.exports = Компоненты_правил