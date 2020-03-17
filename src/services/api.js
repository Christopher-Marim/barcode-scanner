import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ptsv2.com/t/5rmp1-1584408896/post',
});

export default api;
