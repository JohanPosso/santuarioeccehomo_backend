const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const Servicios = sequelize.define("Servicios", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
});

module.exports = Servicios;
