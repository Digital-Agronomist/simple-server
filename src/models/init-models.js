var DataTypes = require("sequelize").DataTypes;
var _plants = require("./plants");

function initModels(sequelize) {
  var plants = _plants(sequelize, DataTypes);


  return {
    plants,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
