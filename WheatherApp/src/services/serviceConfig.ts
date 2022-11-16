const CITIES_LIST = [
  2988507, // Paris,
  3117735, // Madrid,
  5368361, // Los Angeles,
  4930956, // Boston
  5128581, // New York City,
  1880252, // Singapore
  3094802, // Cracow,
  3081368, // Wroclaw,
];

export const cityIdsQuery = CITIES_LIST.join(',');

export const serviceConfig = {
  baseUrl: 'https://api.openweathermap.org/data/',
  version: '2.5',
  apiKey: '9a29521300953f9d7675b1d216c719e9',
};
