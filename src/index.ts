// import 'dotenv/config'
require('dotenv').config()
const express = require('express');
// const https = require('https');
const app = express();
const { mean, standardDeviation, variance } = require('simple-statistics');
// import { map } from 'ramda';
import differenceInHours from 'date-fns/differenceInHours';
// import { processSunriseSunset, groupByDateAndFilterFirst } from './utils';
import { filterAndGroupByDate } from './utils/dateTime';
import {createInsertStatements} from './utils';

import { getPhotoperiodFromAPI, getSolarAPI } from './services/api';


const port = process.env.APP_PORT || 5000;

console.log(port)

app.get('/', async (request, response) => {


  const solarAPIparams = {
    latitude: 3.512008,
    longitude: -76.357677,
    start: '2019-09-30T17:00:00.000Z', // timestamp
    format: 'json',
    duration: 'P31D',
    period: 'PT60M',
  }


  const data = await getSolarAPI({ ...solarAPIparams });

  const measurements = filterAndGroupByDate(data, 'period_end');

  const flattenedMeasurements = measurements.flat();

  // const sqlScript = createInsertStatements(flattenedMeasurements);
  // console.log(sqlScript);

  response.send("Hi there!")

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});



