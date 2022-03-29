import { JournalEntries } from '../state';

const storeKey = '__my_journal_store__';

export const syncToStore = (data: JournalEntries): void => {
  window.localStorage.setItem(storeKey, JSON.stringify(data));
};

export const syncFromStore = (): JournalEntries => {
  const data: null | string = window.localStorage.getItem(storeKey);
  return data ? JSON.parse(data) : [];
};
