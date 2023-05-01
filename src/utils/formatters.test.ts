import { formatLogDate, formatNumber } from './formatters';

describe('formatters verification', () => {
  describe('formatLogDate', () => {
    test('01 - formats a date string as expected', () => {
      const date = '2022-05-01T00:00:00.000Z';
      expect(formatLogDate(date)).toBe('30 de abril de 2022');
    });
  });

  describe('formatNumber', () => {
    test('01 - formats a number with commas as expected', () => {
      expect(formatNumber(10000)).toBe('10.000');
      expect(formatNumber(123456789)).toBe('123.456.789');
    });
  });
});
