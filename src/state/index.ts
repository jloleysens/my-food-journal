import {
  atom,
  useRecoilState,
  useRecoilCallback,
  useRecoilValueLoadable,
} from 'recoil';

import { Day, Entry } from '../types';
import { syncFromStore, syncToStore } from '../store';

export type JournalEntries = Day[];

// Atoms

const isAddingEntry = atom({
  key: 'isAddingEntry',
  default: false,
});

const journalEntries = atom<JournalEntries>({
  key: 'journalState',
  default: (async () => {
    return syncFromStore();
  })(),
  effects: [
    ({ onSet }) => {
      onSet(syncToStore);
    },
  ],
});

// Hooks

export const useJournalEntries = () => {
  return useRecoilValueLoadable(journalEntries);
};

export const useIsAddingEntry = () => {
  return useRecoilState(isAddingEntry);
};

// Actions

export const useAddEntry = () => {
  return useRecoilCallback(
    ({ snapshot, set }) =>
      async (day: Omit<Day, 'entries'>, entry: Entry) => {
        const entries = await snapshot.getPromise(journalEntries);
        const nextEntries = [...entries];
        for (let x = 0; x < nextEntries.length; x++) {
          const d = nextEntries[x];
          if (
            day.day === d.day &&
            day.month === d.month &&
            day.year === d.year
          ) {
            set(journalEntries, [
              ...nextEntries.slice(0, x),
              { ...d, entries: [...d.entries, entry] },
              ...nextEntries.slice(x + 1),
            ]);
            return;
          }
        }
        set(journalEntries, [{ ...day, entries: [entry] }, ...nextEntries]);
      },
    []
  );
};

// TODO: remove entry and edit entry
// export const useRemoveEntry = () => {
//   return useRecoilCallback(
//     ({ snapshot, set }) =>
//       async (id: string) => {
//         const entry = store.insert(e);
//         const entries = await snapshot.getPromise(journalEntries);
//         set(
//           journalEntries,
//           journalEntries.filter((entry) => entry.id !== id)
//         );
//       },
//     []
//   );
// };

// Selectors
