import React, { FunctionComponent } from 'react';

import { SpacerHS } from '../Spacer';

interface Props {
  date: Date;
  description: string;
}

export const DayEntry: FunctionComponent<Props> = ({ date, description }) => (
  <div className="flex text-xl">
    <div>
      <span role="img">🥓</span>
    </div>
    <SpacerHS />
    <div>
      <p className="leading-8 font-semibold">{description}</p>
    </div>
  </div>
);
