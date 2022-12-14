import { useCallback } from 'react';

import { useQuery } from '@tanstack/react-query';
import { LocationItem, WeatherItem } from 'src/utils/types';

import storage from '../local-data-source/storage';
import { cityIdsQuery } from '../serviceConfig';

import { requestSecureGet } from './networking/axiosClient';

type LocationApiItem = LocationItem & {
  main: {
    temp: number;
  };
  weather: Array<WeatherItem>;
};

type LocationApiResponse = {
  list: Array<LocationApiItem>;
};

type LocationResponse = Array<LocationItem>;

const parseLocation = (data: LocationApiResponse): LocationResponse => {
  const parsedLocation = data.list.map(location => ({
    ...location,
    weather: location.weather[0],
  }));

  return parsedLocation;
};

export const useLocationWeather = () =>
  useQuery<LocationApiResponse, Error, LocationResponse>(
    ['weatherGroup'],
    () =>
      requestSecureGet<LocationApiResponse>(`group?id=${cityIdsQuery}&cnt=1`),
    {
      select: useCallback((data: LocationApiResponse) => {
        const parsedLocations = parseLocation(data);

        parsedLocations.forEach(locationToSave => storage.save(locationToSave));

        return parsedLocations;
      }, []),
    },
  );
