import moment from 'moment';

export const formatArticles = (articles) => {
  const regex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img;
  return articles.map(el => {
    el.source.id = Date.now() + Math.random().toString(36).substring(2, 9);
    el.publishedAt = moment.utc(el.publishedAt).format('HH:mm-DD-MM-YYYY');
    el.source.name = el.url.match(regex);
    return el;
  });
};

export const formatDatePicker = (date) => moment(date).format('YYYY-MM-DDThh:mm:ss');

export const getTotalPages = (totalResult) => {
  const result = Math.ceil(totalResult / 10);
  const totalPages = 10;
  if (result > 10) {
    return totalPages;
  } else {
    return result;
  }
};
