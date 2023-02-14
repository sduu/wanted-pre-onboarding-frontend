import { instance } from './api';

const TODO_URL = 'todos';

export const createTodoApi = async todo => {
  try {
    const response = await instance.post(TODO_URL, { todo });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTodosApi = async () => {
  try {
    const response = await instance.get(TODO_URL);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTodoApi = async (id, todo, isCompleted) => {
  try {
    const response = await instance.put(`${TODO_URL}/${id}`, { todo, isCompleted });

    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteTodoApi = async id => {
  try {
    const response = await instance.delete(`${TODO_URL}/${id}`);

    return response;
  } catch (error) {
    throw error;
  }
};
