import { useState } from 'react';

import storage from 'src/services/local-data-source/storage';
import { LocationItem } from 'src/utils/types';

export const useStorage = (
  locationId: number,
): [LocationItem, (id: number) => void] => {
  const [locationData, setLocationData] = useState(
    storage.restoreBy(locationId),
  );

  const updateLocationId = (id: number) => {
    setLocationData(storage.restoreBy(id));
  };

  return [locationData, updateLocationId];
};
