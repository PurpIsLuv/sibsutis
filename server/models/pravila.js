const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Правила = sequelize.define('правила',{
    "нечеткий_дескриптор": {
        type: Sequelize.INTEGER,
    },
    "вес": {
        type: Sequelize.FLOAT,
    },
})

module.exports = Правила