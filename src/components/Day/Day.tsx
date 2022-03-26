import React, { FunctionComponent } from 'react';
import { Entry } from '../../types';
import { SpacerVS, SpacerVXS } from '../Spacer';
import { DayTitle } from './DayTitle';
import { DayEntry } from './DayEntry';
import { SunsetLine } from '../SunsetLine';

interface Props {
  entries: Entry[];
}

export const Day: FunctionComponent<Props> = ({ entries }) => (
  <div className="bg-lightBgDarker p-5 rounded-xl">
    <DayTitle date={new Date()} />
    <SpacerVS />
    <div className="ml-1">
      {entries.map(({ date, description }, index) => (
        <React.Fragment key={index}>
          <DayEntry date={date} description={description} />
          {index !== entries.length - 1 && <SpacerVXS />}
        </React.Fragment>
      ))}
      <SpacerVS />
      <SunsetLine />
    </div>
  </div>
);
