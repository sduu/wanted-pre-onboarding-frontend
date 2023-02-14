import { instance } from './api';

const AUTH_URL = 'auth';

export const signUpApi = async (email, password) => {
  try {
    const response = await instance.post(`${AUTH_URL}/signup`, { email, password });

    return response;
  } catch (error) {
    throw error;
  }
};

export const signInApi = async (email, password) => {
  try {
    const response = await instance.post(`${AUTH_URL}/signin`, { email, password });

    return response;
  } catch (error) {
    throw error;
  }
};
