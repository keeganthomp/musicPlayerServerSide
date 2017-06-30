'use strict';
module.exports = function(sequelize, DataTypes) {
  var userchoices = sequelize.define('userchoices', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    audioFile: DataTypes.STRING,
    artist: DataTypes.STRING,
    song: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return userchoices;
};