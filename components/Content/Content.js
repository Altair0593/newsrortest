import React from 'react';
import PropTypes from 'prop-types';
import NewsBlock from './components/NewsBlock/NewsBlock.js';
import FilterBlock from '../FilterBlock/FilterBlock.js';
import Pagination from './components/Pagination/Pagination.js';
import Header from '../Header/Header.js';
import { Container } from 'semantic-ui-react';
import { ItemWrapper } from './styled.js';

const Content = ({ topics, languagePickerButtons, news, dateFrom, dateTo, datePickerInputs, datePickerButton, activePage, totalPages, headerModalButton, headerModalText }) => {
  return (
    <Container>
      <Header
        topics={topics}
        headerModalButton={headerModalButton}
        headerModalText={headerModalText}
      />
      <ItemWrapper>
        <FilterBlock
          dateFrom={dateFrom}
          dateTo={dateTo}
          datePickerInputs={datePickerInputs}
          datePickerButton={datePickerButton}
          languagePickerButtons={languagePickerButtons}
        />
      </ItemWrapper>

      <NewsBlock news={news} />
      <ItemWrapper>
        <Pagination activePage={activePage} totalPages={totalPages} fluid />
      </ItemWrapper>
    </Container>
  );
};

Content.propTypes = {
  activePage: PropTypes.number,
  totalPages: PropTypes.number,
  topics: PropTypes.array.isRequired,
  headerModalButton: PropTypes.object.isRequired,
  headerModalText: PropTypes.object.isRequired,
  news: PropTypes.array.isRequired,
  dateFrom: PropTypes.string.isRequired,
  dateTo: PropTypes.string.isRequired,
  datePickerInputs: PropTypes.array.isRequired,
  datePickerButton: PropTypes.object.isRequired,
  languagePickerButtons: PropTypes.array.isRequired,
};

export default Content;
