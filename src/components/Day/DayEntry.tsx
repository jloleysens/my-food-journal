import React, { FunctionComponent } from 'react';

interface Props {
  createdAt: string;
  description: string;
}

export const DayEntry: FunctionComponent<Props> = ({
  createdAt,
  description,
}) => (
  <div className="flex items-center justify-start px-8 text-xl">
    <div className="mr-4">
      <span role="img">🥓</span>
    </div>
    <div>
      <p className="leading-8 font-semibold">{description}</p>
    </div>
  </div>
);
