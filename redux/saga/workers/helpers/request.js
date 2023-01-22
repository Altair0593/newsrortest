import axios from 'axios';

export const getRequestSender = (path, params) =>
  axios({
    method: 'get',
    url: path,
    params,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=UTF-8',
    },
  });
