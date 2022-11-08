import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import ArrivalFlight from './ArrivalFlight';
import '../../styles/entitieList.scss';
import { flightsListSelector } from '../flights.selectors';
import { getFlightsList } from '../flights.actions';

const ArrivalFlightsList = ({ flightsList, getFlightsList }) => {
  const currentDate = moment(new Date()).format('DD-MM-YYYY');

  const [searchParams, setSearchParams] = useSearchParams();
  const date = searchParams.get('date');

  useEffect(() => {
    if (!date) {
      setSearchParams({ ...searchParams, date: currentDate });
      return;
    }
    getFlightsList(date);
  }, [date]);

  const search = searchParams.get('search');

  const flights = search
    ? flightsList.arrival.filter(flight => flight.codeShareData[0].codeShare.includes(search))
    : flightsList.arrival;

  return flights.length === 0 ? (
    <div className="default_no-flights">No flights</div>
  ) : (
    flights.map(flightInfo => <ArrivalFlight key={flightInfo.ID} flightInfo={flightInfo} />)
  );
};

ArrivalFlightsList.propTypes = {
  flightsList: PropTypes.object.isRequired,
  getFlightsList: PropTypes.func.isRequired,
};

const mapState = state => ({
  flightsList: flightsListSelector(state),
});

const mapDispatch = {
  getFlightsList: getFlightsList,
};

export default connect(mapState, mapDispatch)(ArrivalFlightsList);
