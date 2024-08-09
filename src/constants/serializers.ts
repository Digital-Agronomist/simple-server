interface serializeSolarAPIType {
    air_temp: string;
    ghi: string;
    relative_humidity: string;
    wind_speed_10m: string;
    precipitation_rate: string;
    period_end: string;
}

export const serializeSolarAPI: serializeSolarAPIType = {
    air_temp: 'temperature',
    ghi: 'solar_radiation',
    relative_humidity: 'air_humidity',
    wind_speed_10m: 'wind_speed',
    precipitation_rate: 'precipitation',
    period_end: 'observation_datetime'
};
