import { useState } from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'semantic-ui-react';
import { StyledFlexDiv } from 'components/Content/styled';

const paginationRender = ({ totalPages, changeActivePage, getDefaultNews, news }) => {
  const [activeItem, setActiveItem] = useState('');

  const changePageState = (event, { activePage }) => {
    setActiveItem(activePage);
    changeActivePage(activePage);
    getDefaultNews();
  };
  return (
    <StyledFlexDiv>
      {news.length >= 10
        ? <Pagination
          activePage={activeItem}
          totalPages={totalPages}
          onPageChange={changePageState}
        />
        : null
      }
    </StyledFlexDiv>
  );
};

paginationRender.propTypes = {
  news: PropTypes.array,
  totalPages: PropTypes.number,
  getDefaultNews: PropTypes.func,
  changeActivePage: PropTypes.func,
};

export default paginationRender;
