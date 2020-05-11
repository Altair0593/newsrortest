import React from 'react';
import PropTypes from 'prop-types';
import NewsBlock from './components/NewsBlock/NewsBlock.js';
import FilterBlock from '../FilterBlock/FilterBlock.js';

const Content = ({ news, dateFrom, dateTo, datePickerInputs, datePickerButton, languagePickerButtons }) => {
  return (
    <>
      <FilterBlock
        dateFrom={dateFrom}
        dateTo={dateTo}
        datePickerInputs={datePickerInputs}
        datePickerButton={datePickerButton}
        languagePickerButtons={languagePickerButtons}
      />
      <NewsBlock news={news}/>
    </>
  );
};

Content.propTypes = {
  news: PropTypes.object.isRequired,
  dateFrom: PropTypes.string.isRequired,
  dateTo: PropTypes.string.isRequired,
  datePickerInputs: PropTypes.array.isRequired,
  datePickerButton: PropTypes.object.isRequired,
  languagePickerButtons: PropTypes.array.isRequired,
};

export default Content;
