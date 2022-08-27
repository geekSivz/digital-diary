import axios from 'axios';

export function requestGetFeeds() {
  return axios.request({
    method: 'get',
    url: 'http://localhost:3001/getFeeds'
  });
}
