const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const Personal = sequelize.define("Personal", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ocupacion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Personal;
