import { getCalendarGridCellsForDate } from './CalendarGrid.util';

describe('getCalendarGridCellsForDate()', () => {
  describe('given date', () => {
    it('should generate array of dates for visible month grid', () => {
      const calendarGridCells = getCalendarGridCellsForDate('2018-05');

      expect(calendarGridCells).toEqual([
        { date: '2018-04-30' },
        { date: '2018-05-01' },
        { date: '2018-05-02' },
        { date: '2018-05-03' },
        { date: '2018-05-04' },
        { date: '2018-05-05' },
        { date: '2018-05-06' },
        { date: '2018-05-07' },
        { date: '2018-05-08' },
        { date: '2018-05-09' },
        { date: '2018-05-10' },
        { date: '2018-05-11' },
        { date: '2018-05-12' },
        { date: '2018-05-13' },
        { date: '2018-05-14' },
        { date: '2018-05-15' },
        { date: '2018-05-16' },
        { date: '2018-05-17' },
        { date: '2018-05-18' },
        { date: '2018-05-19' },
        { date: '2018-05-20' },
        { date: '2018-05-21' },
        { date: '2018-05-22' },
        { date: '2018-05-23' },
        { date: '2018-05-24' },
        { date: '2018-05-25' },
        { date: '2018-05-26' },
        { date: '2018-05-27' },
        { date: '2018-05-28' },
        { date: '2018-05-29' },
        { date: '2018-05-30' },
        { date: '2018-05-31' },
        { date: '2018-06-01' },
        { date: '2018-06-02' },
        { date: '2018-06-03' },
      ]);
    });
  });
});
