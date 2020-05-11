import { combineReducers } from 'redux';
import { newsReducer } from './reducers/newsReducer.js';
import { configReducer } from './reducers/configReducer.js';
import { filterNewsReducer } from './reducers/filterNewsReducer.js';

export default combineReducers({
  news: newsReducer,
  config: configReducer,
  filterNews: filterNewsReducer,
});
