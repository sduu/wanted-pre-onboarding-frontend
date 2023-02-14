import React, { useEffect } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { TodoListWrapper } from './TodoList.style';
import useApi from './../../hooks/useApi';
import { getTodosApi } from './../../apis/todo';
import { useTodoContext } from '../../context/todoContext';

const TodoList = () => {
  const { todos, setTodos } = useTodoContext();
  const [{ data }] = useApi(getTodosApi, []);

  useEffect(() => {
    if (!data) return;
    setTodos(data);
  }, [data]);

  return (
    <TodoListWrapper>
      {todos && todos.map(todoData => <TodoItem key={todoData.id} todoData={todoData} />)}
    </TodoListWrapper>
  );
};

export default TodoList;
