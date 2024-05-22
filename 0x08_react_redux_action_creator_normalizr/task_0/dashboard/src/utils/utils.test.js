import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

//test full year
test('getFullYear returns the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
});

//test for footer
test('getFooterCopy returns correct string for true or false argument', () => {
const trueResult = getFooterCopy(true);
const falseResult = getFooterCopy(false);
expect(trueResult).toBe('Holberton School');
expect (falseResult).toBe('Holberton School main dashboard');
});

//test for notification
test('getLatestNotification returns the correct string', () => {
    const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(expectedString);
});