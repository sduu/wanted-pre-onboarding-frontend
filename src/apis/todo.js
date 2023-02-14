import { instance } from './api';

const TODO_URL = 'todos';

export const createTodoApi = async todo => {
  return instance.post(TODO_URL, { todo });
};

export const getTodosApi = async () => {
  return instance.get(TODO_URL);
};

export const updateTodoApi = async (id, todo, isCompleted) => {
  return instance.put(`${TODO_URL}/${id}`, { todo, isCompleted });
};

export const deleteTodoApi = async id => {
  return instance.delete(`${TODO_URL}/${id}`);
};
