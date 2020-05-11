import axios from 'axios';

export const getRequestSender = path => {
  return axios({
    method: 'get',
    url: path,
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  });
};
