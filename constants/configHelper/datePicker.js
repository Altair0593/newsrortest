const maxDate = new Date();

export const datePickerInputs = [
  {
    name: 'dateFrom',
    popupPosition: 'bottom center',
    id: 'dateFrom',
    maxDate,
    dataAt: 'data-at-date-picker-from',
  },
  {
    name: 'dateTo',
    popupPosition: 'bottom center',
    id: 'dateTo',
    maxDate,
    dataAt: 'data-at-date-picker-to',
  },
];

export const datePickerButton = {
    content: 'filterByDate',
    onClickCallback: 'filterNewsByDate',
    color: 'primary',
    id: 'filterByDate',
    dataAt: 'data-at--button',
};
