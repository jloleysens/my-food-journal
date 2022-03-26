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
  <div className="bg-lightBgDarker1 pt-8 rounded-xl">
    <div className="px-8">
      <DayTitle date={new Date()} />
    </div>
    <div className="flex flex-col ml-1">
      <SpacerVS />
      {entries.map(({ date, description }, index) => (
        <React.Fragment key={index}>
          <DayEntry date={date} description={description} />
          {index !== entries.length - 1 && (
            <>
              <SpacerVXS />
              <div className="bg-lightBgDarker3 w-16 rounded h-px self-center" />
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
