import React from 'react';

import { Day, SpacerVS } from './components';
import { AddEntry } from './containers';

import { useJournalEntries } from './state';

function App() {
  const days = useJournalEntries();

  if (days.state === 'loading') {
    return <div>Loading...</div>;
  }

  if (days.state === 'hasError') {
    return <div>Something went wrong...</div>;
  }

  return (
    <>
      <div className="phone-content-width sm:w-96 md:w-144 mx-auto my-0 overflow-auto pt-10 pb-24 bg-lightBg text-black leading-6 h-full">
        {days.contents.map((day, index) => (
          <React.Fragment key={index}>
            <Day key={index} {...day} />
            {index !== days.contents.length - 1 && <SpacerVS />}
          </React.Fragment>
        ))}
        <AddEntry />
      </div>
    </>
  );
}

export default App;
