import { LocationItem } from '../../utils/types';

export const buildIconUrl = (iconCode: string) =>
  `https://openweathermap.org/img/wn/${iconCode}.png`;

export const mockItems: Array<LocationItem> = [
  {
    id: 3163858,
    name: 'Zocca',
    cod: 200,
    temp: 50,
    weather: {
      id: 501,
      main: 'Rain',
      description: 'moderate rain',
      icon: '10d',
    },
  },
  {
    id: 3163857,
    name: 'London',
    cod: 200,
    temp: 57,
    weather: {
      id: 501,
      main: 'Rain',
      description: 'moderate rain',
      icon: '10d',
    },
  },
];
