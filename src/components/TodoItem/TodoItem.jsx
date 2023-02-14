import { useRef, useState, useEffect } from 'react';
import { Button, Label, Span, Input, TodoItemWrapper } from './TodoItem.style';
import InputItem from '../common/InputItem/InputItem';

const TodoItem = ({ todoData }) => {
  const { todo } = todoData;

  const [isEdit, setIsEdit] = useState(false);
  const textInputRef = useRef();

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
          <Input type='checkbox' />
          <InputItem type='text' id='modify' inputRef={textInputRef} />
          <Button data-testid='submit-button'>제출</Button>
          <Button onClick={toggleIsEdit} data-testid='cancel-button'>
            취소
          </Button>
        </>
      ) : (
        <>
          <Label>
            <Input type='checkbox' />
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
