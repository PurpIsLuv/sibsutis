'use strict';
module.exports = (sequelize, DataTypes) => {
  const direction = sequelize.define('direction', {
    direction_Code: DataTypes.STRING,
    direction_preparation: DataTypes.STRING,
    profile_preparation: DataTypes.STRING
  }, {timestamps:false});
  direction.associate = function(models) {
    direction.belongsTo(models.student,{
      foreignKey: 'direction_code',
      target_key: 'direction_Code',
    })
  };
  return direction;
};