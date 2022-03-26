import React, { FunctionComponent } from 'react';

import { getMonthDate, getMonthName, getYear } from '../../modules/date';

interface Props {
  date: Date;
}

export const DayTitle: FunctionComponent<Props> = ({ date }) => (
  <h1 className="font-bold text-4xl">
    {getMonthDate(date)}&nbsp;{getMonthName(date)}&nbsp;{getYear(date)}
  </h1>
);
