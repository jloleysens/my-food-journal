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
// const days = [];

function App() {
  return (
    <>
      <div className="phone-content-width sm:w-96 md:w-144 mx-auto my-0 overflow-auto pt-10 pb-24 bg-lightBg text-black leading-6">
        {days.map(({ entries }, index) => (
          <React.Fragment key={index}>
            <Day key={index} entries={entries} />
            {index !== days.length - 1 && <SpacerVS />}
          </React.Fragment>
        ))}
        <AddEntry />
      </div>
    </>
  );
}

export default App;
