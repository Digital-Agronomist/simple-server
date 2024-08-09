import { create, ApisauceInstance } from 'apisauce';
import { api as apiConstants, headers } from '../constants/api';

const { solarAPIurl, sunrisesunsetAPIurl } = apiConstants;

const outputParameters = 'relative_humidity,wind_speed_10m,air_temp,ghi,precipitation_rate';

const buildAPIinstance = (baseURL: string): ApisauceInstance =>
  create({
    baseURL,
    headers: { ...headers },
  });

const apiInstance = (apiString: string): ApisauceInstance =>
  buildAPIinstance(apiString === 'solarAPI' ? solarAPIurl : sunrisesunsetAPIurl);

interface SolarAPIResponse {
  estimated_actuals?: any[];
}

export async function getRequest(
  apiString: string,
  endpoint: string,
  params: Record<string, any>
): Promise<any> {
  console.log('apiString', apiString);

  const api = apiInstance(apiString);

  try {
    const response = await api.get<SolarAPIResponse>(endpoint, { ...params });
    console.log('response.ok', response.ok);
    console.log('params', params);

    if (response.ok && response.data) {
      return response.data.estimated_actuals;
    } else {
      console.error(response.problem);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getSolarAPI(params: Record<string, any>): Promise<any> {
  const data = await getRequest(
    'solarAPI',
    '/data/historic/radiation_and_weather.json',
    {
      ...params,
      output_parameters: outputParameters,
    }
  );
  return data;
}

export async function getPhotoperiodFromAPI(params: Record<string, any>): Promise<any> {
  const data = await getRequest('sunrisesunsetAPI', '/json', params);
  return data;
}
