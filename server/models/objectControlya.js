const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Объект_контроля = sequelize.define('объект_контроля',{
    "id_объекта_контроля": {
        type: Sequelize.INTEGER,
    },
    "формулировка": {
        type: Sequelize.STRING,
    },
})

module.exports = Объект_контроля