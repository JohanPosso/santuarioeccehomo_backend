const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const Informacion = sequelize.define("Informacion", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  seccion_1titulo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  seccion_1descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  numero: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  seccion_2titulo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  seccion_2descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ubicacion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mision: {
    type: DataTypes.TEXT("medium"),
    allowNull: true,
  },
  vision: {
    type: DataTypes.TEXT("medium"),
    allowNull: true,
  },
  sobrenosotros: {
    type: DataTypes.TEXT("medium"),

    allowNull: true,
  },
  otro: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  facebook: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  instagram: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  twitter: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  resena: {
    type: DataTypes.TEXT("medium"),
    allowNull: true,
  },
  imagen_sec1: { type: DataTypes.STRING, allowNull: true },
  imagen_sec2: { type: DataTypes.STRING, allowNull: true },
});

module.exports = Informacion;
