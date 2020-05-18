import * as regularExpression from './regularExpression';

export const checkInputValue = (event) => {
  if (!event.key.match(regularExpression.textExpression)) {
    if (event.key !== 'Backspace') {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  }
  return true;
};
