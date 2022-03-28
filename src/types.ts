export interface Day {
  day: number;
  month: number;
  year: number;
  entries: Entry[];
}

export interface Entry {
  createdAt: string;
  description: string;
}

export interface DaySerialized extends Omit<Day, 'date'> {
  date: number;
}

export interface EntrySerialized extends Omit<Entry, 'createdAt'> {
  createdAt: number;
}
