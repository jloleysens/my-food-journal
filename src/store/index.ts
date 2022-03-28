import { JournalEntries } from '../state';

const storeKey = '__my_journal_store__';

export const syncToStore = (data: JournalEntries): void => {
  window.localStorage.setItem(storeKey, JSON.stringify(data));
};

export const syncFromStore = (): JournalEntries => {
  return JSON.parse(window.localStorage.getItem(storeKey)) || [];
};
