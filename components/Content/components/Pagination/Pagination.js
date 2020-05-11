import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'semantic-ui-react';

const paginationRender = ({ activePage, totalPages }) => <Pagination defaultActivePage={activePage} totalPages={totalPages}/>;

paginationRender.propTypes = {
    activePage: PropTypes.number,
    totalPages: PropTypes.number,
};

export default paginationRender;
