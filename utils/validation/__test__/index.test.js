import { checkDates } from '../index';
import moment from 'moment';

describe('checkDates works correctly', () => {
  it('must return false', () => {
    const currentDay = moment().day();
    const mockDateFrom = moment().isoWeekday(currentDay - 7).valueOf();
    const mockDateTo = moment().isoWeekday(currentDay).valueOf();
    expect(checkDates(mockDateFrom, mockDateTo)).toBe(false);
  });

  it('must return true', () => {
    const mockDateFrom = moment('2020-10-10T00:00:00+02:00').format().valueOf();
    const mockDateTo = moment('2020-09-10T00:00:00+02:00').format().valueOf();
    expect(checkDates(mockDateFrom, mockDateTo)).toBe(true);
  });
});
