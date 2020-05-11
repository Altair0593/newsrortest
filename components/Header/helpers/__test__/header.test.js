import { checkInputValue } from '../validation.js';

describe('checkInputValue works correctly', () => {
    it('must return true', () => {
        const mockEvent = {
            key: 'j',
        };

        expect(checkInputValue(mockEvent)).toBe(true);
    });
    it('must return false', () => {
        const mockEvent = {
            key: 'ж',
            preventDefault: function () {
                return false;
            },
            stopPropagation: function () {
                return false;
            },
        };
        expect(checkInputValue(mockEvent)).toBe(false);
    });
});
