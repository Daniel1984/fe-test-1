import React from 'react';
import PropTypes from 'prop-types';
import { getCalendarGridCellsForDate } from './CalendarGrid.util';

CalendarGrid.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      propertyId: PropTypes.string,
      date: PropTypes.string,
    }),
  }).isRequired,
};

function CalendarGrid({ match: { params: { date } } }) {
  return getCalendarGridCellsForDate(date).map(cell => (
    <div key={cell.date}>
      {cell.date}
    </div>
  ));
}

export default CalendarGrid;
