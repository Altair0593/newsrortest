import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import { NewsWrapper, NewsItem } from './styled.js';

const News = ({ news }) => {
  return (
    <NewsWrapper>
      {news.articles.map(el => {
        return (
          <NewsItem key={el.source.name + Math.random()}>
            <Item.Group>
              <Item>
                <Item.Image size='small' src={el.urlToImage} />
                <Item.Content>
                  <Item.Header as='a'>{el.title}</Item.Header>
                  <Item.Meta>
                    {el.description}
                  </Item.Meta>
                  <Item.Extra>{el.source.name}</Item.Extra>
                  <Item.Extra>{el.publishedAt}</Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </NewsItem>
        );
      })}
    </NewsWrapper>
  );
};

News.propTypes = {
  news: PropTypes.object.isRequired,
};

export default News;
