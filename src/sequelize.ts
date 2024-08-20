import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from 'sequelize';
import { initModels } from './models/init-models';

export const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: process.env.DB_DIALECT as 'mysql' | 'postgres' | 'sqlite' | 'mariadb',
    logging: console.log
  }
);

const models = initModels(sequelize);

export { models };