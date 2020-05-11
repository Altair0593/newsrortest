import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import { NewsItem, ItemExtraWrapper } from './styled.js';

const NewsBlock = ({ news }) => {
  return (
    <>
      {news.map(el => {
        return (
          <NewsItem key={el.url}>
            <Item.Group>
              <Item>
                <Item.Image size='small' src={el.urlToImage}/>
                <Item.Content>
                  <Item.Header as='a'>{el.title}</Item.Header>
                  <Item.Meta>{el.description}</Item.Meta>
                  <ItemExtraWrapper>
                    <Item.Extra as='a'>
                      <span>{el.source.name}</span>
                    </Item.Extra>
                    <Item.Extra className='itemExtraRight'>
                      <span>{el.publishedAt}</span>
                    </Item.Extra>
                  </ItemExtraWrapper>
                </Item.Content>
              </Item>
            </Item.Group>
          </NewsItem>
        );
      })}
    </>
  );
};

NewsBlock.propTypes = {
  news: PropTypes.array.isRequired,
};

export default NewsBlock;
