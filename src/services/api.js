import { create } from 'apisauce'
import { api as apiConstants,  headers } from '../constants/api';

const { solarAPIurl, sunrisesunsetAPIurl } = apiConstants;

// const buildSunriseSunsetAPIbody = (params) => ({
    
// });

// define the api
const buildAPIinstance = (baseURL) => create({
  baseURL,
  headers: { ...headers },
});


const apiInstance = (apiString) =>
    buildAPIinstance(apiString === 'solarAPI' ? solarAPIurl : sunrisesunsetAPIurl);

export async function getRequest(apiString, params) {

    const api = apiInstance(apiString)

    try {

        const response = await api.get('/json', { ...params });

        // console.log('params', params)

        if (response.ok) {
            console.log(response.data)
        } else {
            console.error(response.error);
        }

    } catch(error) {

        console.error(error);

    }    
    
}

export async function getPhotoperiodFromAPI(params) {
    const data = await getRequest('sunrisesunsetAPI', params);
    // console.log('data from  sunset', data);
    return data;
};
