const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const User = sequelize.define("User", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    email: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    },
    type: {
        type: Sequelize.STRING,
    },
});

module.exports = User