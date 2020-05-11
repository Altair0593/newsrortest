import React from 'react';
import PropTypes from 'prop-types';
import News from './components/News/News.js';

const NewsBlock = ({ news }) => {
  return (
    <>
      <News news={news}/>
    </>
  )
};

NewsBlock.propTypes = {
  news: PropTypes.object.isRequired,
};

export default NewsBlock;
