import { instance } from './api';

const AUTH_URL = 'auth';

export const signUpApi = async (email, password) => {
  return instance.post(`${AUTH_URL}/signup`, { email, password });
};

export const signInApi = async (email, password) => {
  return instance.post(`${AUTH_URL}/signin`, { email, password });
};
