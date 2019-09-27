import { addSeconds, format } from 'date-fns';
import { Worklog } from '../models/Worklog';

export const formatDatetime = (datetime: Date): string => {
  return format(datetime, 'dd.MM.yyyy hh:mm:ss');
};
export const getDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60) % 60;
  const hours = Math.floor(seconds / (60 * 60));
  return `${hours}h ${minutes}m`;
};

export const sumWorklogs = (worklogs: Worklog[]) => {
  const reducer = (accumulator: number, currentValue: number) =>
    accumulator + currentValue;
  const allTimes = worklogs.map(worklog => worklog.timeSpentSeconds);
  return allTimes.reduce(reducer);
};
