export const datePickerInputs = [
  {
    name: 'dateFrom',
    popupPosition: 'bottom center',
    id: 'dateFrom',
    dateFormat: 'dd/MM/yyyy',
    maxDate: new Date(),
    dataAt: 'data-at-date-picker-from',
  },
  {
    name: 'dateTo',
    popupPosition: 'bottom center',
    id: 'dateTo',
    dateFormat: 'dd/MM/yyyy',
    maxDate: new Date(),
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
