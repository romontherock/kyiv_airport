import React from 'react';
import SearchFlightForm from './SearchFlightForm';
import Navigation from './Navigation';
import DateModal from './DateModal';
import FlightsList from './FlightsList';
import { BrowserRouter } from 'react-router-dom';

const InteractInfo = () => {
  return (
    <BrowserRouter>
      <SearchFlightForm />
      <Navigation />
      <DateModal />
      <FlightsList />
    </BrowserRouter>
  );
};
export default InteractInfo;
