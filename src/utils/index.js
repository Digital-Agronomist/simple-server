const { parse, addMinutes } = require('date-fns');
const { zonedTimeToUtc, format } = require('date-fns-tz');

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

    const sqlFormat = format(dateTimeUtc, "yyyy-MM-dd'T'HH:mm:ss'Z'");

    console.log(sqlFormat); // This will be in UTC, formatted for SQL
}
