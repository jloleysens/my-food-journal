import React, { FunctionComponent } from 'react';

interface Props {}

export const AddEntry: FunctionComponent<Props> = ({}) => {
  return (
    <div className="fixed bottom-0 w-full p-4 pt-0 h-20">
      <div className="bg-lightBgDarkerer w-full h-full rounded-lg">
        Create a new entry
      </div>
    </div>
  );
};
