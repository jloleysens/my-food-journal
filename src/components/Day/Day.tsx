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
