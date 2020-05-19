const newsReducer = {
  newsData: [],
};

const themeReducer = {
  currentTheme: {},
  nameTheme: '',
};

const topicsReducer = {
  topicsData: [],
};

const configReducer = {
  configData: {},
  locale: 'en',
};

const filterNewsReducer = {
  dateFrom: 'dateFrom',
  dateTo: 'dateTo',
  language: 'en',
  category: 'trump',
  defaultActivePage: 1,
  totalPages: 10,
  isError: false,
};

export default {
  news: newsReducer,
  theme: themeReducer,
  topics: topicsReducer,
  config: configReducer,
  filterNews: filterNewsReducer,
  addTopic: () => true,
};