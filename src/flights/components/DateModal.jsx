import React from 'react';
import { useSearchParams } from 'react-router-dom';
import '../../styles/dateModal.scss';
import { getNewDateFormat, yesterdayDate, todayDate, tomorrowDate } from '../../utils/dateUtils';

const DateModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const date = searchParams.get('date');

  const setDayDate = weekday => {
    const date = `${weekday.split('/')[0]}-${weekday.split('/')[1]}-${new Date().getFullYear()}`;
    setSearchParams({ ...searchParams, date: date });
  };

  const setSearchFormDate = event => {
    event.stopPropagation();
    const { value } = event.target;
    const searchFormDate = `${value.split('-')[2]}-${value.split('-')[1]}-${value.split('-')[0]}`;
    searchParams.set('date', searchFormDate);
    setSearchParams(searchParams);
  };

  const selectedDate = date ? `${date.split('-')[0]}/${date.split('-')[1]}` : getNewDateFormat();
  const calendarDate = date
    ? `${date.split('-')[2]}-${date.split('-')[1]}-${date.split('-')[0]}`
    : `${getNewDateFormat().split('-')[2]}-${getNewDateFormat().split('-')[1]}-${
        getNewDateFormat().split('-')[0]
      }`;

  return (
    <div className="calendar">
      <div className="calendar-date">
        <div className="calendar-date__num">{selectedDate}</div>
        <input
          className="calendar-date__form"
          type="date"
          name="date"
          value={calendarDate}
          onChange={setSearchFormDate}
        />
      </div>
      <button
        className="calendar-day calendar__yesterday"
        onClick={() => setDayDate(yesterdayDate)}
      >
        <div className="calendar-day__num">{yesterdayDate}</div>
        <div className="calendar-day__title">YESTERDAY</div>
      </button>
      <button className="calendar-day calendar__today" onClick={() => setDayDate(todayDate)}>
        <div className="calendar-day__num">{todayDate}</div>
        <div className="calendar-day__title">TODAY</div>
      </button>
      <button className="calendar-day calendar__tomorrow" onClick={() => setDayDate(tomorrowDate)}>
        <div className="calendar-day__num">{tomorrowDate}</div>
        <div className="calendar-day__title">TOMORROW</div>
      </button>
    </div>
  );
};

export default DateModal;
