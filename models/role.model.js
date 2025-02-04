const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Role = sequelize.define("Role", {
  id_role: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Exporta el modelo primero
module.exports = Role;
