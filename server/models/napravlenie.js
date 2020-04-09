const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Направление = sequelize.define("направление",{
    "код_направления": {
        type: Sequelize.STRING,
    },
    "направление_подготовки": {
        type: Sequelize.STRING,
    },
    "профиль_подготовки": {
        type: Sequelize.STRING,
    },
})


module.exports = Направление