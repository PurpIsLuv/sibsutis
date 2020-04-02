'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    student_id: DataTypes.INTEGER,
    no_group: DataTypes.STRING,
    fio: DataTypes.STRING,
    direction_code: DataTypes.STRING
  }, {timestamps: false});
  student.associate = function(models) {
    student.hasMany(models.direction,{
      foreignKey: 'direction_Code',
      onDelete: 'cascade'
    })
  };
  return student;
};