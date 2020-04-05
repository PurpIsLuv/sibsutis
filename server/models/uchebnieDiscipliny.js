const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const UchebnieDiscipliny = sequelize.define("UchebnieDiscipliny",{
    id_discipliny: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    naimenovanie_discipliny: {
        type: Sequelize.STRING,
    },
    forma_controlya: {
        type: Sequelize.STRING,
    },
    cod_napravleniya: {
        type: Sequelize.STRING,
    },
})