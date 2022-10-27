const baseUrl = `https://api.iev.aero/api/flights/`;

export const fetchFlightsList = date => fetch(`${baseUrl}${date}`).then(res => res.json());
