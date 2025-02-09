const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const Galeria = sequelize.define("Galeria", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Galeria;
