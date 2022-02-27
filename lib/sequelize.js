const { setUpModels } = require("../db/models/index");
const { Sequelize } = require("sequelize");
const { config } = require("../config/config");

const options = {
  dialect: "postgres",
  logging: config.isProd ? false : console.log,
};

if (config.isProd) {
  options.ssl = {
    rejectUnauthorized: false,
  };
}

const sequelize = new Sequelize(config.dbUrl, options);

setUpModels(sequelize);

module.exports = sequelize;
