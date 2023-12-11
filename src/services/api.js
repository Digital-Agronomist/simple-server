import { create } from 'apisauce'
import { api as apiConstants,  headers } from '../constants/api';

const { solarAPIurl, sunrisesunsetAPIurl } = apiConstants;

const outputParameters = 'relative_humidity,wind_speed_10m,air_temp,ghi,precipitation_rate';


// const buildSunriseSunsetAPIbody = (params) => ({
    
// });

// define the api
const buildAPIinstance = (baseURL) => create({
  baseURL,
  headers: { ...headers },
});


const apiInstance = (apiString) =>
    buildAPIinstance(apiString === 'solarAPI' ? solarAPIurl : sunrisesunsetAPIurl);

export async function getRequest(apiString, endpoint, params) {

    const api = apiInstance(apiString)

    try {

        const response = await api.get(endpoint, { ...params });
        // console.log(response.params)

        // console.log('params', params)

        if (response.ok) {
            // console.log(response.data);
            return response.data.estimated_actuals;
        } else {
            console.error(response.error);
        }

    } catch(error) {

        console.error(error);

    }    
    
}

export async function getSolarAPI(params) {

    const data = await getRequest('solarAPI', '/data/historic/radiation_and_weather.json', {
        ...params,
        // duration: 'PT5M',
        output_parameters: outputParameters
    });
    return data;

}

export async function getPhotoperiodFromAPI(params) {
    const data = await getRequest('sunrisesunsetAPI', '/json', params);
    // console.log('data from  sunset', data);
    return data;
};
