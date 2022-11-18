import { LocationItem } from 'src/utils/types';

const cache = {} as Record<number, LocationItem>;

const storage = {
  save: (location: LocationItem) => {
    cache[location.id] = location;
  },
  restoreBy: (id: number) => cache[id],
};

Object.freeze(storage);

export default storage;
