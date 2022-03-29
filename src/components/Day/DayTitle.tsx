import React, { FunctionComponent } from 'react';

import { getMonthDate, getMonthName, getYear } from '../../modules/date';

interface Props {
  day: number;
  month: number;
  year: number;
}

export const DayTitle: FunctionComponent<Props> = ({ day, month, year }) => (
  <h1 className="font-bold text-2xl sm:text-4xl whitespace-nowrap">
    {day}&nbsp;{getMonthName(month)}&nbsp;{year}
  </h1>
);
