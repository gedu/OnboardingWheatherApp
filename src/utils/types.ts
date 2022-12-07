type TemperatureInfo = {
  humidity: number;
  pressure: number;
  temp: number;
};

export type WeatherItem = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

export type LocationItem = {
  clouds: { all: number };
  cod: number;
  id: number;
  main: TemperatureInfo;
  name: string;
  weather: WeatherItem;
  wind: { speed: number };
};
