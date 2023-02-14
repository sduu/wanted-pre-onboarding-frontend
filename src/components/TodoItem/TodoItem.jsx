import { useRef, useState, useEffect } from 'react';
import { Button, Label, Span, Input, TodoItemWrapper } from './TodoItem.style';
import { useTodoContext } from '../../context/todoContext';
import { updateTodoApi } from '../../apis/todo';
import InputItem from '../common/InputItem/InputItem';
import useInput from '../../hooks/useInput';
import useApi from '../../hooks/useApi';

const TodoItem = ({ todoData }) => {
  const { id, todo, isCompleted } = todoData;

  const { updateTodo } = useTodoContext();

  const [{ data: updatedTodo }, callUpdateTodoApi] = useApi(updateTodoApi, [], true);

  const [isEdit, setIsEdit] = useState(false);
  const textInputRef = useRef();
  const [textValue, updateTextValue] = useInput(todo);
  const [isChecked, toggleIsChecked] = useInput(isCompleted);

  const toggleIsEdit = () => {
    setIsEdit(prev => !prev);
  };

  const onSubmitHandler = async e => {
    e.preventDefault();

    console.log(updatedTodo);
    const response = await callUpdateTodoApi(id, textValue, isChecked);

    if (response) {
      updateTodo({ id, todo: textValue, isCompleted: isChecked });
      toggleIsEdit();
    }
  };

  useEffect(() => {
    if (isEdit) {
      textInputRef.current.focus();
    }
  }, [isEdit]);

  useEffect(() => {
    callUpdateTodoApi(id, textValue, isChecked);
  }, [isChecked]);

  return (
    <TodoItemWrapper>
      {isEdit ? (
        <>
          <TodoItemWrapper as='form' onSubmit={onSubmitHandler}>
            <Input type='checkbox' onChange={toggleIsChecked} checked={isChecked} />
            <InputItem type='text' value={textValue} onChange={updateTextValue} id='modify' inputRef={textInputRef} />
            <Button type='submit' data-testid='submit-button'>
              제출
            </Button>
            <Button onClick={toggleIsEdit} data-testid='cancel-button'>
              취소
            </Button>
          </TodoItemWrapper>
        </>
      ) : (
        <>
          <Label>
            <Input type='checkbox' onChange={toggleIsChecked} checked={isChecked} />
            <Span>{todo}</Span>
          </Label>
          <Button onClick={toggleIsEdit} data-testid='modify-button'>
            수정
          </Button>
          <Button data-testid='delete-button'>삭제</Button>
        </>
      )}
    </TodoItemWrapper>
  );
};

export default TodoItem;
