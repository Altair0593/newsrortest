import axios from 'axios';

export const getRequestSender = path =>
  axios({
    method: 'get',
    url: path,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=UTF-8',
    },
  });
