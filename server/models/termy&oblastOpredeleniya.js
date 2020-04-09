const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Термы_и_область_определения = sequelize.define('термы_и_область_определения',{
    "терм": {
        type: Sequelize.STRING,
    },
    "P1": {
        type: Sequelize.FLOAT,
    },
    "P2": {
        type: Sequelize.FLOAT,
    },
    "P3": {
        type: Sequelize.FLOAT,
    },
    "P4": {
        type: Sequelize.FLOAT,
    },
})

module.exports = Термы_и_область_определения