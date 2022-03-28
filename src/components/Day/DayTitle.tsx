import React, { FunctionComponent } from 'react';

import { getMonthDate, getMonthName, getYear } from '../../modules/date';

interface Props {
  date: Date;
}

export const DayTitle: FunctionComponent<Props> = ({ date }) => (
  <h1 className="font-bold text-3xl sm:text-4xl whitespace-nowrap">
    {getMonthDate(date)}&nbsp;{getMonthName(date)}&nbsp;{getYear(date)}
  </h1>
);
