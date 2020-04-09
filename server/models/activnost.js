const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Активность = sequelize.define('активность',{
    "id_активности": {
        type: Sequelize.INTEGER,
    },
    "формулировка": {
        type: Sequelize.STRING,
    },
})

module.exports = Активность