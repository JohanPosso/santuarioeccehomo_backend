const Sequelize = require("sequelize");
const env = process.env.NODE_ENV;
let sequelize;

if (env === "develop") {
  sequelize = new Sequelize(process.env.DATABASE_ENV_DEVELOP, {
    dialect: "postgres",
  });
} else if (env === "production") {
  sequelize = new Sequelize(process.env.DATABASE_ENV_PROD, {
    dialect: "postgres",
  });
} else {
  throw new Error(`El entorno "${env}" no está configurado`);
}
console.info(`Environment  *** ${env} ***`);

// sequelize.sync({ alter: true });
module.exports = sequelize;
