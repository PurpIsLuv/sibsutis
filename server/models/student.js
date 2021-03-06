const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Студент = sequelize.define("студент", {
    "id_студента": {
      type: Sequelize.INTEGER,
    },
    "номер_группы": {
        type: Sequelize.STRING,
    },
    "ФИО": {
        type: Sequelize.STRING,
    },
    "код_направления": {
        type: Sequelize.STRING,
    },
});


module.exports = Студент