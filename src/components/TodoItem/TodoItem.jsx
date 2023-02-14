import { useRef, useState, useEffect } from 'react';
import { Button, Label, Span, Input, TodoItemWrapper } from './TodoItem.style';
import InputItem from '../common/InputItem/InputItem';
import useInput from '../../hooks/useInput';

const TodoItem = ({ todoData }) => {
  const { todo, isCompleted } = todoData;

  const [isEdit, setIsEdit] = useState(false);
  const textInputRef = useRef();
  const [textValue, updateTextValue] = useInput(todo);
  const [isChecked, toggleIsChecked] = useInput(isCompleted);

  const toggleIsEdit = () => {
    setIsEdit(prev => !prev);
  };

  useEffect(() => {
    if (isEdit) {
      textInputRef.current.focus();
    }
  }, [isEdit]);

  return (
    <TodoItemWrapper>
      {isEdit ? (
        <>
          <Input type='checkbox' onChange={toggleIsChecked} checked={isChecked} />
          <InputItem type='text' value={textValue} onChange={updateTextValue} id='modify' inputRef={textInputRef} />
          <Button data-testid='submit-button'>제출</Button>
          <Button onClick={toggleIsEdit} data-testid='cancel-button'>
            취소
          </Button>
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
