import { monthNames } from '../constants';

export const getMonthDate = (date: Date): string => {
  return String(date.getDate());
};

export const getMonthName = (date: number | Date): string => {
  return typeof date === 'number'
    ? monthNames[date]
    : monthNames[date.getMonth()];
};

export const getYear = (date: Date): string => String(date.getFullYear());

export const getHour = (date: Date): string => String(date.getHours());

export const getMinute = (date: Date): string => String(date.getMinutes());
