import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from 'express';
import { filterAndGroupByDate } from './utils/dateTime';
import { getPhotoperiodFromAPI, getSolarAPI } from './services/api';

const app = express();

const port = process.env.APP_PORT || 5000;

console.log(port);

app.get('/', async (request: Request, response: Response) => {
  const solarAPIparams = {
    latitude: 3.512008,
    longitude: -76.357677,
    start: '2019-09-30T17:00:00.000Z', // timestamp
    format: 'json',
    duration: 'P31D',
    period: 'PT60M',
  };

  try {
    const data = await getSolarAPI({ ...solarAPIparams });

    const measurements = filterAndGroupByDate(data, 'period_end');

    const flattenedMeasurements = measurements.flat();

    // const sqlScript = createInsertStatements(flattenedMeasurements);
    // console.log(sqlScript);

    response.send('Hi there!');
  } catch (error) {
    console.error(error);
    response.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
