import { parseISO, format } from 'date-fns';
import { groupBy, map, head, filter, values } from 'ramda';

export const formatDate = (dateString) => format(parseISO(dateString), 'yyyy-MM-dd');

export const filterDaylightResults = (measurement) => {
    const date = parseISO(measurement.period_end);
    return date.getUTCHours() === 17 && measurement.ghi > 0;
};

export const filterAndGroupByDate = (measurements, dateKey) => {
    // Filter measurements for 17:00 UTC with ghi > 0
    const filteredMeasurements = filter(filterDaylightResults, measurements);
  
    // Group by date
    const groupedByDate = groupBy((measurement) => formatDate(measurement[dateKey]), filteredMeasurements);
  
    // Since we are filtering for a specific time, there should be at most one measurement per day
    return values(groupedByDate);
};