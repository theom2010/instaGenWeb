import axios from 'axios';

const api = axios.create({
  baseURL: 'http://64.227.104.113:3333',
});

export default api;
