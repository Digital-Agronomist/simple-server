export const headers = {
    'content-type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.API_KEY || ''}`,
};

export const api = {
    solarAPIurl: 'https://api.solcast.com.au',
    sunrisesunsetAPIurl: 'https://api.sunrisesunset.io',
};
