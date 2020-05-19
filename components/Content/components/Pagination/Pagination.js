import PropTypes from 'prop-types';
import { Pagination } from 'semantic-ui-react';
import { StyledFlexDiv } from 'components/Content/styled';

const paginationRender = ({
  news,
  totalPages,
  currentPage,
  getDefaultNews,
  changeActivePage,
  }) => {
  const changePageState = (event, { activePage }) => {
    if (currentPage === activePage) {
      return;
    }
    changeActivePage(activePage);
    getDefaultNews();
  };
  return (
    <StyledFlexDiv>
      {news.length >= 10
        ? <Pagination
          activePage={currentPage}
          totalPages={totalPages}
          onPageChange={changePageState}
          data-at='data-at-page-button'
        />
        : null
      }
    </StyledFlexDiv>
  );
};

paginationRender.propTypes = {
  news: PropTypes.array.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  getDefaultNews: PropTypes.func.isRequired,
  changeActivePage: PropTypes.func.isRequired,
};

export default paginationRender;
