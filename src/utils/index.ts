import { parse, addMinutes } from 'date-fns';
import { serializeSolarAPI } from '../constants/serializers';

interface Measurement {
  period_end: string;
  [key: string]: any;
}

interface SunriseSunsetResult {
  startDateTimeUtc: Date;
  endDateTimeUtc: Date;
}

export function processSunriseSunset(date: string, utcOffset: number): SunriseSunsetResult {
  const dateTimeChicagoStart = `${date} 4:58:07 AM`;
  const dateTimeChicagoEnd = `${date} 7:13:36 PM`;

  const startDateTime = parse(dateTimeChicagoStart, 'yyyy-M-d h:mm:ss a', new Date());
  const endDateTime = parse(dateTimeChicagoEnd, 'yyyy-M-d h:mm:ss a', new Date());

  const startDateTimeUtc = addMinutes(startDateTime, utcOffset);
  const endDateTimeUtc = addMinutes(endDateTime, utcOffset);

  return { startDateTimeUtc, endDateTimeUtc };
}

const formatDateForSQL = (isoDate: string): string => {
  const date = new Date(isoDate);
  return date.toISOString().slice(0, 19).replace('T', ' ');
};

// const createInsertStatement = (measurement: Measurement): string => {
//   const columns: string[] = [];
//   const values: (number | string)[] = [];

//   for (const key in serializeSolarAPI) {
//     if (measurement.hasOwnProperty(key)) {
//       columns.push(serializeSolarAPI[key]);
//       const value = key === 'period_end' ? formatDateForSQL(measurement[key]) : measurement[key];
//       values.push(typeof value === 'number' ? value : `'${value}'`);
//     }
//   }

//   columns.push('time_period_id');
//   values.push(1);

//   const columnList = columns.join(', ');
//   const valueList = values.join(', ');

//   return `INSERT INTO weathers (${columnList}) VALUES (${valueList});`;
// };

// export const createInsertStatements = (measurements: Measurement[]): string =>
//   measurements.map(createInsertStatement).join('\n');

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))