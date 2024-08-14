import { parseISO, format } from 'date-fns';
import { groupBy, filter, values } from 'ramda';

interface Measurement {
  period_end: string;
  ghi: number;
  [key: string]: any;  
}

export const formatDate = (dateString: string): string => {
  return format(parseISO(dateString), 'yyyy-MM-dd');
};

export const filterDaylightResults = (measurement: Measurement): boolean => {
  const date = parseISO(measurement.period_end);
  return date.getUTCHours() === 17 && measurement.ghi > 0;
};

export const filterAndGroupByDate = (
  measurements: Measurement[], 
  dateKey: string
): Measurement[][] => {
  
  const filteredMeasurements = filter(filterDaylightResults, measurements);
  
  const groupedByDate = groupBy((measurement) => formatDate(measurement[dateKey]), filteredMeasurements);
  
  const groupedByDateValues = values(groupedByDate).filter((group): group is Measurement[] => group !== undefined);

  return groupedByDateValues;
};
