import { TodoProvider } from '../context/todoContext';
import MainContainer from './../components/common/MainContainer/MainContainer';
import TodoInput from './../components/TodoInput/TodoInput';
import TodoList from './../components/TodoList/TodoList';

const TodoPage = () => {
  return (
    <MainContainer>
      <h1>TO DO LIST</h1>
      <TodoProvider>
        <TodoInput />
        <TodoList />
      </TodoProvider>
    </MainContainer>
  );
};

export default TodoPage;
