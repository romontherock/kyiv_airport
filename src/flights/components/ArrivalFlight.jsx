import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/FlightsList.scss';
import { setNewTimeFormat } from '../../utils/dateUtils';

const ArrivalFlight = ({ flightInfo }) => {
  const {
    term,
    timeArrShedule,
    timeArrExpectCalc,
    codeShareData,
    'airportFromID.name_en': city,
    airline,
  } = flightInfo;
  const schedule = setNewTimeFormat(timeArrShedule);
  const status = `Arrived at ${setNewTimeFormat(timeArrExpectCalc)}`;
  const flight = codeShareData[0].codeShare;
  const airlineName = airline.en.name;
  const airlineLogo = airline.en.logoSmallName;
  return (
    <div className="flight-info">
      <div className="flight-info__terminal">{term}</div>
      <div className="flight-info__schedule">{schedule}</div>
      <div className="flight-info__city">{city}</div>
      <div className="flight-info__status">{status}</div>
      <div className="flight-info__airline">
        <img className="flight-info__airline-logo" alt="logoName" src={airlineLogo}></img>
        <div className="flight-info__airline-name">{airlineName}</div>
      </div>
      <div className="flight-info__flight">{flight}</div>
    </div>
  );
};

// ArrivalFlight.propTypes = {
//   flightInfo: PropTypes.objectOf(
//     PropTypes.shape({
//       term: PropTypes.string,
//       timeArrShedule: PropTypes.string,
//       timeArrExpectCalc: PropTypes.string,
//       airline: PropTypes.object,
//     }),
//   ).isRequired,
// };

export default ArrivalFlight;
