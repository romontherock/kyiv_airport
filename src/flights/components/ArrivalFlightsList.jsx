import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import ArrivalFlight from './ArrivalFlight';
import '../../styles/entitieList.scss';
import { flightsListSelector } from '../flights.selectors';
import { getFlightsList } from '../flights.actions';

const ArrivalFlightsList = ({ flightsList, getFlightsList }) => {
  const currentDate = moment(new Date()).format('DD-MM-YYYY');

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const date = searchParams.get('date');

  useEffect(() => {
    if (!date) {
      console.log(date);
      setSearchParams({ ...searchParams, date: currentDate });
      return;
    }
    getFlightsList(date);
  }, [date]);

  const flights = search
    ? flightsList.arrival.filter(flight => flight.codeShareData[0].codeShare.includes(search))
    : flightsList.arrival;

  return flights.length === 0 ? (
    <div className="default_no-flights">No flights</div>
  ) : (
    flights.map(flightInfo => <ArrivalFlight key={flightInfo.ID} flightInfo={flightInfo} />)
  );
};

const mapState = state => ({
  flightsList: flightsListSelector(state),
});

const mapDispatch = {
  getFlightsList: getFlightsList,
};

export default connect(mapState, mapDispatch)(ArrivalFlightsList);

// import React, { useState, useEffect } from 'react';
// import ArrivalFlight from './ArrivalFlight';
// import '../../styles/entitieList.scss';

// const ArrivalFlightsList = () => {
//   const [state, setState] = useState({ flightsList: [] });
//   const { flightsList } = state;
//   const params = new URLSearchParams(location.search);
//   const search = params.get('search');
//   const date = params.get('date');
//   const baseUrl = `https://api.iev.aero/api/flights/${date ? date : getNewDateFormat()}`;

//   useEffect(() => {
//     fetch(baseUrl)
//       .then(response => response.json())
//       .then(response => {
//         setState({ flightsList: response.body.arrival });
//       });
//   }, [date]);

//   const flights = search
//     ? flightsList.filter(flight => flight.codeShareData[0].codeShare.includes(search))
//     : flightsList;

//   return flights.length === 0 ? (
//     <div className="default_no-flights">No flights</div>
//   ) : (
//     flights.map(flightInfo => <ArrivalFlight key={flightInfo.ID} flightInfo={flightInfo} />)
//   );
// };

// export default ArrivalFlightsList;
