const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const napravlenie = sequelize.define("napravlenie",{
    codNapravleniya: {
        type: Sequelize.STRING,
    },
    napravlenie_podgotovky: {
        type: Sequelize.STRING,
    },
    profile_podgotovky: {
        type: Sequelize.STRING,
    },
})

module.exports = napravlenie