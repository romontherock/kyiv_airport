import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import DepartureFlight from './DepartureFlight';
import '../../styles/entitieList.scss';
import { flightsListSelector } from '../flights.selectors';
import { getFlightsList } from '../flights.actions';

const DepartureFlightsList = ({ flightsList, getFlightsList }) => {
  const currentDate = moment(new Date()).format('DD-MM-YYYY');

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const date = searchParams.get('date');

  useEffect(() => {
    if (!date) {
      searchParams.set('date', date || currentDate);
      setSearchParams(searchParams);
      return;
    }
    getFlightsList(date);
  }, [date]);

  const flights = search
    ? flightsList.departure.filter(flight => flight.codeShareData[0].codeShare.includes(search))
    : flightsList.departure;

  return flights.length === 0 ? (
    <div className="default_no-flights">No flights</div>
  ) : (
    flights.map(flightInfo => <DepartureFlight key={flightInfo.ID} flightInfo={flightInfo} />)
  );
};

DepartureFlightsList.propTypes = {
  flightsList: PropTypes.object.isRequired,
  getFlightsList: PropTypes.func.isRequired,
};

const mapState = state => ({
  flightsList: flightsListSelector(state),
});

const mapDispatch = {
  getFlightsList: getFlightsList,
};

export default connect(mapState, mapDispatch)(DepartureFlightsList);
