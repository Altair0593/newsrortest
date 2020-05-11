export const datePickerInputs = [
  {
    minDate: '01/01/1970',
    maxDate: '12/12/2020',
    pickerWidth: '100px',
    name: 'dateFrom',
    popupPosition: 'bottom center',
    onChangeCallback: 'changeDateFilter',
    id: 'dateFrom',
    dataAt: 'data-at-change-date-from',
  },
  {
    minDate: '01/01/1970',
    maxDate: '12/12/2020',
    pickerWidth: '100px',
    name: 'dateTo',
    popupPosition: 'bottom center',
    onChangeCallback: 'changeDateFilter',
    id: 'dateTo',
    dataAt: 'data-at-change-date-to',
  },
];

export const datePickerButton = {
    content: 'filterByDate',
    onClickCallback: 'filterNewsByDate',
    color: 'primary',
    id: 'filterByDate',
    dataAt: 'data-at-filter-by-date',
};
