import { setUpModels } from "./../db/models/index";
import { Sequelize } from "sequelize";
import { config } from "./config";

const USER = encodeURIComponent(config.dbUser!);
const PASSWORD = encodeURIComponent(config.dbPassword!);

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

export const sequelize = new Sequelize(URI, {
  dialect: "postgres",
  logging: console.log,
});

setUpModels(sequelize);
sequelize.sync();
