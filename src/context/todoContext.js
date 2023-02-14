import { createContext, useContext } from 'react';
import useTodo from '../hooks/useTodo';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const { todos, setTodos, addTodo, updateTodo, deleteTodo } = useTodo([]);

  const value = { todos, setTodos, addTodo, updateTodo, deleteTodo };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => useContext(TodoContext);
