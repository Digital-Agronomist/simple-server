import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import { sequelize } from "./sequelize";
import routes from './routes';

const app = express();
const port = process.env.APP_PORT || 5000;

async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
}

initializeDatabase();

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
