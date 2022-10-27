const baseUrl = 'https://api.iev.aero/api/flights/24-02-2022';

export const getFlightsInfo = () => {
  return fetch(baseUrl).then(response => response.json());
};
