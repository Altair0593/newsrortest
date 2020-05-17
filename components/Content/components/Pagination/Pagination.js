import { useState } from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'semantic-ui-react';
import { StyledFlexDiv } from 'components/Content/styled';

const paginationRender = ({ totalPages, changeActivePage, getDefaultNews }) => {
  const [activeItem, setActiveItem] = useState('');

  const changePageState = (event, { activePage }) => {
    setActiveItem(activePage);
    changeActivePage(activePage);
    getDefaultNews();
  };
  return (
    <StyledFlexDiv>
      <Pagination activePage={activeItem} totalPages={totalPages} onPageChange={changePageState} />
    </StyledFlexDiv>
  );
};

paginationRender.propTypes = {
  activePage: PropTypes.number,
  totalPages: PropTypes.number,
  getDefaultNews: PropTypes.func,
  changeActivePage: PropTypes.func,
};

export default paginationRender;
