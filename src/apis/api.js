import Axios from 'axios';

const BASE_URL = process.env.REACT_APP_URL;

export const instance = Axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-type': 'application/json' },
});

instance.interceptors.request.use(
  config => {
    const userToken = localStorage.getItem('access_token');

    config.headers.Authorization = `Bearer ${userToken}`;

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
