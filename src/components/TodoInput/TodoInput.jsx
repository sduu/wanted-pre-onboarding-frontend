import { Button, TodoInputWrapper } from './TodoInput.style';
import InputItem from '../common/InputItem/InputItem';

const TodoInput = () => {
  return (
    <TodoInputWrapper>
      <InputItem type='text' label='Todo 입력' id='new-todo' />
      <Button type='submit' data-testid='new-todo-add-button'>
        추가
      </Button>
    </TodoInputWrapper>
  );
};

export default TodoInput;
