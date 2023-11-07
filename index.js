require('dotenv').config()
const express = require('express');
// const https = require('https');
const app = express();
const { mean } = require('simple-statistics');
const { map } = require('ramda');
const port = 3000

app.get('/', (req, res) => {

  const { API_KEY } = process.env;

  const headers = {
    'content-type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  };


  fetch("https://api.solcast.com.au/data/historic/radiation_and_weather.json?latitude=3.512008&longitude=-76.357677&azimuth=44&tilt=90&start=2019-10-01T17:00:00.000Z&duration=P1D&format=json&time_zone=utc", { headers: {...headers} } )
  .then((response) => {
    if (response.ok) {
      response.json().then(json => {
        console.log(json)
      })
    }
  })
  .catch(function (err) {
    console.log("Unable to fetch -", err);
  });

  res.send('!!!!!')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});



