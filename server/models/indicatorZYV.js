const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Индикатор_зув = sequelize.define('индикатор_зув',{
    "код_зув": {
        type: Sequelize.STRING,
    },
    "код_индикатора": {
        type: Sequelize.STRING,
    },
})

module.exports = Индикатор_зув