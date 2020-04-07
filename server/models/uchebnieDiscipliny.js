const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Учебные_дисциплины = sequelize.define("учебные_дисциплины",{
    id_дисциплины: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    наименование_дисциплины: {
        type: Sequelize.STRING,
    },
    форма_контроля: {
        type: Sequelize.STRING,
    },
    код_направления: {
        type: Sequelize.STRING,
    },
})

module.exports = Учебные_дисциплины