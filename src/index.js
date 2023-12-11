import 'dotenv/config'
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





const date = '2019-05-15';

const port = process.env.APP_PORT || 3000;

app.get('/', async (req, res) => {

  // const { startDateTimeUtc, endDateTimeUtc } = processSunriseSunset('2000-9-3', -240);

  const queryParams = {
    lat: 3.512008,
    lng: -76.357677,
    date
  };

  const solarAPIparams = {
    latitude: 3.512008,
    longitude: -76.357677,
    start: '2019-10-01T17:00:00.000Z',
    format: 'json',
    duration: 'P31D',
    period: 'PT60M',
  }

  // await getPhotoperiodFromAPI({ ...queryParams });

  const data = await getSolarAPI({ ...solarAPIparams });

  // console.log('****', data)

  // Function to parse and format the date

// Function to group by date and take the first measurement


  // // Example usage
  // const measurements = [
  //   { date: '2019-10-01T17:00:00.000Z', value: 10 },
  //   { date: '2019-10-01T18:00:00.000Z', value: 12 },
  //   // ... more measurements
  // ];

  const filteredMeasurements = filterAndGroupByDate(data, 'period_end');

  const sqlScript = createInsertStatements(filteredMeasurements);
  console.log(sqlScript);
  // console.log(filteredMeasurements);

  // console.log(data);

  // const parsed = parseISO(`${right}T$left}`);

  // const hours = differenceInHours(endDateTimeUtc, startDateTimeUtc);

  // console.log("****hours" , hours

  // testing()

  // const getTempArray = (list) => map((l) => l.air_temp, list)


  // fetch("https://api.solcast.com.au/data/historic/radiation_and_weather.json?latitude=3.512008&longitude=-76.357677&azimuth=44&tilt=90&start=2019-10-01T17:00:00.000Z&duration=P31D&format=json&time_zone=utc&output_parameters=relative_humidity,wind_speed_10m,air_temp,ghi,dni,dhi", { headers: {...headers} } )
  // .then((response) => {
  //   if (response.ok) {
  //     response.json().then(json => {
  //       const tempArray = getTempArray(json.estimated_actuals);
  //       console.log(tempArray);

  //       console.log('MEAN', mean(tempArray));
  //       console.log('standardDeviation', standardDeviation(tempArray));
  //       console.log('variance', variance(tempArray));
  //     })
  //   }
  // })
  // .catch(function (err) {
  //   console.log("Unable to fetch -", err);
  // });

  res.json(filteredMeasurements)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});



