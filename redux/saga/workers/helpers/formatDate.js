import moment from 'moment';

export const formatPublishedDate = (articles) => {
  return articles.map(el => {
    el.publishedAt = moment.utc(el.publishedAt).format('HH:mm-DD-YYYY');
    return el;
  });
};

export const formatDatePicker = (date) => moment(date).format('YYYY-MM-DD');
