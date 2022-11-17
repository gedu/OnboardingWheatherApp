export type WeatherItem = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

export type LocationItem = {
  cod: number;
  id: number;
  name: string;
  temp: number;
  weather: WeatherItem;
};
