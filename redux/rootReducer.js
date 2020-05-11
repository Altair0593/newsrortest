import { combineReducers } from 'redux';
import { newsReducer } from './reducers/newsReducer.js';
import { topicsReducer } from './reducers/topicsReducer.js';
import { configReducer } from './reducers/configReducer.js';
import { filterNewsReducer } from './reducers/filterNewsReducer.js';

export default combineReducers({
  news: newsReducer,
  topics: topicsReducer,
  config: configReducer,
  filterNews: filterNewsReducer,
});
