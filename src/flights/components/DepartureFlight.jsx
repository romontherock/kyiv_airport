import React from 'react';
import '../../styles/FlightsList.scss';
import { setNewTimeFormat } from '../../utils/dateUtils';

const DepartureFlight = ({ flightInfo }) => {
  const {
    term,
    timeDepShedule,
    'airportToID.name_en': city,
    timeDepExpectCalc,
    codeShareData,
    airline,
  } = flightInfo;

  const schedule = setNewTimeFormat(timeDepShedule);
  const status = `Took off at ${setNewTimeFormat(timeDepExpectCalc)}`;
  const flight = codeShareData[0].codeShare;
  const airlineName = airline.en.name;
  const airlineLogo = airline.en.logoName;

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

export default DepartureFlight;
