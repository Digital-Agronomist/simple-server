import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from 'express';
import { sequelize, models } from "./sequelize";

const app = express();

const port = process.env.APP_PORT || 5000;

console.log(port);

app.get('/', async (request: Request, response: Response) => {

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    const plants = await models.plants.findAll();
    response.json(plants);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    response.status(500).send('Database connection failed');
  }

  async function testSoilModel() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
  
      const soils = await models.soils.findAll();
      console.log('Soils:', JSON.stringify(soils, null, 2));
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  
  testSoilModel();

  async function testAnalyticalMethodsModel() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
  
      const methods = await models.analyticalMethods.findAll();
      console.log('Analytical Methods:', JSON.stringify(methods, null, 2));
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  
  testAnalyticalMethodsModel();

  async function testLocationsModel() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');

      const allLocations = await models.locations.findAll();
      console.log('All Locations:', JSON.stringify(allLocations, null, 2));

    } catch (error) {
      console.error('Unable to connect to the database or fetch data:', error);
    }
  }

  testLocationsModel();

  
});

// new routes comming up!!!! 

// app.get('/plants')
// app.get('soils')

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
