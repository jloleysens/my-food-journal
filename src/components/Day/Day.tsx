import React, { FunctionComponent } from 'react';
import { Entry } from '../../types';
import { SpacerVS, SpacerVXS } from '../Spacer';
import { DayTitle } from './DayTitle';
import { DayEntry } from './DayEntry';
import { SunsetLine } from '../SunsetLine';

interface Props {
  day: number;
  month: number;
  year: number;
  entries: Entry[];
}

export const Day: FunctionComponent<Props> = ({ entries, ...day }) => (
  <div className="bg-lightBgDarker1 pt-6 sm:pt-8 rounded-xl w-full">
    <div className="px-8">
      <DayTitle {...day} />
    </div>
    <div className="flex flex-col ml-1">
      <SpacerVS />
      {entries.map(({ createdAt, description }, index) => (
        <React.Fragment key={index}>
          <DayEntry createdAt={createdAt} description={description} />
          {index !== entries.length - 1 && (
            <>
              <SpacerVXS />
              <SpacerVXS />
            </>
          )}
        </React.Fragment>
      ))}
      <SpacerVS />
      <SunsetLine />
      <SpacerVS />
    </div>
  </div>
);
