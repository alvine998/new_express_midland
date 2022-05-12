var DataTypes = require("sequelize").DataTypes;
var _admins = require("./admins");

function initModels(sequelize) {
  var admins = _admins(sequelize, DataTypes);


  return {
    admins,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
