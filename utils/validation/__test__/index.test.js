import { checkDates } from "../index";

describe('checkDates works correctly', () => {
  it('must return true', () => {
    const mockDateFrom = new Date('2020/09/12');
    const mockDateTo = new Date('2020/10/12');
    expect(checkDates(mockDateFrom, mockDateTo)).toBe(true);
  });

  it('must return true', () => {
    const mockDateFrom = new Date('2020/09/12');
    const mockDateTo = new Date('2020/12/12');
    expect(checkDates(mockDateFrom, mockDateTo)).toBe(true);
  });

  it('must return true', () => {
    const mockDateFrom = new Date('2019/09/12');
    const mockDateTo = new Date('2020/12/12');
    expect(checkDates(mockDateFrom, mockDateTo)).toBe(true);
  });

  it('must return false', () => {
    const mockDateFrom = new Date('2020/10/12');
    const mockDateTo = new Date('2020/08/12');
    expect(checkDates(mockDateFrom, mockDateTo)).toBe(false);
  });

  it('must return false', () => {
    const mockDateFrom = new Date('2020/10/12');
    const mockDateTo = new Date('2020/06/12');
    expect(checkDates(mockDateFrom, mockDateTo)).toBe(false);
  });

  it('must return false', () => {
    const mockDateFrom = new Date('2020/10/12');
    const mockDateTo = new Date('2019/06/12');
    expect(checkDates(mockDateFrom, mockDateTo)).toBe(false);
  });
});
