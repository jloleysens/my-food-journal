import React from 'react';

import { Day, SpacerVS } from './components';
import { AddEntry } from './containers';

const entries = [
  {
    date: new Date(),
    description: 'Bacon and a lot of other stuff ',
  },
  {
    date: new Date(),
    description:
      'Bacon and a lot of other stuff Bacon and a lot of other stuff',
  },
  {
    date: new Date(),
    description:
      'Bacon and a lot of other stuff Bacon and a lot of other stuff',
  },
  {
    date: new Date(),
    description:
      'Bacon and a lot of other stuff Bacon and a lot of other stuff',
  },
];

const days = [{ entries }, { entries }, { entries }];

function App() {
  return (
    <>
      <div className="w-88 sm:w-96 mx-auto my-0 overflow-auto pt-12 pb-24 bg-lightBg text-black leading-6">
        {days.map(({ entries }, index) => (
          <React.Fragment key={index}>
            <Day key={index} entries={entries} />
            {index !== days.length - 1 && <SpacerVS />}
          </React.Fragment>
        ))}
      </div>
      <AddEntry />
    </>
  );
}

export default App;
