import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'semantic-ui-react';
import { StyledFlexDiv } from 'components/Content/styled';

const paginationRender = ({ activePage, totalPages }) =>
  <StyledFlexDiv>
    <Pagination defaultActivePage={activePage} totalPages={totalPages}/>
  </StyledFlexDiv>
;

paginationRender.propTypes = {
  activePage: PropTypes.number,
  totalPages: PropTypes.number,
};

export default paginationRender;
