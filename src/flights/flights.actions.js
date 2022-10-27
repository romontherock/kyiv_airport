import { fetchFlightsList } from './flightsGateway';

export const FLIGHTS_RECEIVED = 'FLIGHTS_RECEIVED';

export const flightsReceived = flightsList => ({
  type: FLIGHTS_RECEIVED,
  payload: flightsList,
});

export const getFlightsList = data => {
  const thunkAction = dispatch => {
    fetchFlightsList(data).then(flightsList => dispatch(flightsReceived(flightsList.body)));
  };
  return thunkAction;
};
