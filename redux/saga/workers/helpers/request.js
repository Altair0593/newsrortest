import axios from 'axios';

export const getRequestSender = path =>
  axios({
    method: 'get',
    url: path,
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  });
