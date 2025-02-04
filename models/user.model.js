const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const Role = require("./role.model"); // Asegúrate de que este import está aquí

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  RoleId: {
    type: DataTypes.INTEGER,
    references: {
      model: Role,
      key: "id_role",
    },
  },
});

// Define la relación después de que ambos modelos han sido definidos
User.belongsTo(Role);
Role.hasMany(User, { foreignKey: "RoleId" });

module.exports = User;
