const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Napravlenie = sequelize.define("Napravlenie",{
    cod_napravleniya: {
        type: Sequelize.STRING,
    },
    napravlenie_podgotovky: {
        type: Sequelize.STRING,
    },
    profile_podgotovky: {
        type: Sequelize.STRING,
    },
})


module.exports = Napravlenie