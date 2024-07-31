const { parse, addMinutes } = require('date-fns');
const { zonedTimeToUtc, format } = require('date-fns-tz');
import { serializeSolarAPI } from '../constants/serializers';

// import { formatDate } from './dateTime';

export function processSunriseSunset(date, utcOffset) {
    const dateTimeChicagoStart = `${date} 4:58:07 AM`;
    const dateTimeChicagoEnd = `${date} 7:13:36 PM`;
  
    // Parse the local date-time strings
    const startDateTime = parse(dateTimeChicagoStart, 'yyyy-M-d h:mm:ss a', new Date());
    const endDateTime = parse(dateTimeChicagoEnd, 'yyyy-M-d h:mm:ss a', new Date());
  
    // Adjust by UTC offset
    const startDateTimeUtc = addMinutes(startDateTime, utcOffset);
    const endDateTimeUtc = addMinutes(endDateTime, utcOffset);
  
    // console.log('first', startDateTimeUtc, endDateTimeUtc);
  
    return { startDateTimeUtc, endDateTimeUtc };

    // const sqlFormat = format(dateTimeUtc, "yyyy-MM-dd'T'HH:mm:ss'Z'");

    // console.log(sqlFormat); // This will be in UTC, formatted for SQL
}


const formatDateForSQL = (isoDate) => {
    const date = new Date(isoDate);
    return date.toISOString().slice(0, 19).replace('T', ' ');
};

const createInsertStatement = measurement => {
    const columns = [];
    const values = [];

    for (const key in serializeSolarAPI) {
        if (measurement.hasOwnProperty(key)) {
            columns.push(serializeSolarAPI[key]);
            const value = key === 'period_end' ? formatDateForSQL(measurement[key]) : measurement[key];
            values.push(typeof value === 'number' ? value : `'${value}'`);
        }
    }

    // Add time_period_id
    columns.push('time_period_id');
    values.push(1);

    const columnList = columns.join(', ');
    const valueList = values.join(', ');

    return `INSERT INTO weathers (${columnList}) VALUES (${valueList});`;
};

export const createInsertStatements = measurements => measurements.map(createInsertStatement).join('\n');


