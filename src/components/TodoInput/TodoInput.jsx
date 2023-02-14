import { Button, TodoInputWrapper } from './TodoInput.style';
import InputItem from '../common/InputItem/InputItem';
import useInput from '../../hooks/useInput';

const TodoInput = () => {
  const [value, updateValue] = useInput('');

  return (
    <TodoInputWrapper>
      <InputItem type='text' value={value} label='Todo 입력' onChange={updateValue} id='new-todo' />
      <Button type='submit' data-testid='new-todo-add-button'>
        추가
      </Button>
    </TodoInputWrapper>
  );
};

export default TodoInput;
