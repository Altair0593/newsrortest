import { combineReducers } from 'redux';
import { newsReducer } from './reducers/newsReducer';
import { configReducer } from './reducers/configReducer';
import { topicsReducer } from './reducers/topicsReducer';
import { themeReducer } from 'managers/themeManager/reducer';
import { filterNewsReducer } from './reducers/filterNewsReducer';

export default combineReducers({
  news: newsReducer,
  theme: themeReducer,
  topics: topicsReducer,
  config: configReducer,
  filterNews: filterNewsReducer,
});
