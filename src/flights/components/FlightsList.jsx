import React from 'react';
import EntitieList from './EntitieList';
import '../../styles/entitieList.scss';
import DepartureFlightsList from './DepartureFlightsList';
import ArrivalFlightsList from './ArrivalFlightsList';
import { Routes, Route } from 'react-router-dom';

const FlightsList = () => {
  return (
    <>
      <EntitieList />
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
