const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const student = sequelize.define("student", {
    student_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    group_no: {
        type: Sequelize.STRING,
    },
    fio: {
        type: Sequelize.STRING,
    },
    cod_napravleniya: {
        type: Sequelize.STRING,
    },
});

module.exports = student