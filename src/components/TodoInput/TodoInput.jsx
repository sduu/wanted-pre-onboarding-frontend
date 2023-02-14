import React, { useEffect } from 'react';
import InputItem from '../common/InputItem/InputItem';
import { Button, TodoInputWrapper } from './TodoInput.style';
import { createTodoApi } from './../../apis/todo';
import { useTodoContext } from '../../context/todoContext';
import useInput from './../../hooks/useInput';
import useApi from './../../hooks/useApi';

const TodoInput = () => {
  const { addTodo } = useTodoContext();
  const [{ data }, callCreateTodoApi] = useApi(createTodoApi, [], true);
  const [value, updateValue, setTextValue] = useInput('');

  const onSubmitHandler = async e => {
    e.preventDefault();

    if (!value.trim()) {
      alert('내용을 입력해주세요.');
      return;
    }

    callCreateTodoApi(value);
  };

  useEffect(() => {
    if (!data) return;
    addTodo(data);
    setTextValue('');
  }, [data]);

  return (
    <TodoInputWrapper onSubmit={onSubmitHandler}>
      <InputItem type='text' value={value} label='Todo 입력' onChange={updateValue} id='new-todo' />
      <Button type='submit' data-testid='new-todo-add-button'>
        추가
      </Button>
    </TodoInputWrapper>
  );
};

export default TodoInput;
