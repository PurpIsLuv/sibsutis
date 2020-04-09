const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Объект_контроля_зув = sequelize.define('объект_контроля_зув',{
    "id_объекта_контроля": {
        type: Sequelize.INTEGER,
    },
    "код_зув": {
        type: Sequelize.STRING,
    },
})

module.exports = Объект_контроля_зув