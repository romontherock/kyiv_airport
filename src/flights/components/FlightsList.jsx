import React from 'react';
import '../../styles/entitieList.scss';
import '../../styles/entitieList.scss';
import DepartureFlightsList from './DepartureFlightsList';
import ArrivalFlightsList from './ArrivalFlightsList';
import { Routes, Route } from 'react-router-dom';

const FlightsList = () => {
  return (
    <>
      <div className="entities">
        <div className="entities__title_first">Terminal</div>
        <div className="entities__title_first">Schedule</div>
        <div className="entities__title_first">City</div>
        <div className="entities__title_second">Status</div>
        <div className="entities__title_second">Airline</div>
        <div className="entities__title_second">Flight</div>
      </div>
      <Routes>
        <Route
          path="/"
          element={<div className="default">Please choose type of flights you need </div>}
        />
        <Route path="/departure" element={<DepartureFlightsList />} />
        <Route path="/arrival" element={<ArrivalFlightsList />} />
      </Routes>
    </>
  );
};

export default FlightsList;
