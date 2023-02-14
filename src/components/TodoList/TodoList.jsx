import { TodoListWrapper } from './TodoList.style';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {
  const todos = [
    {
      id: 8093,
      todo: '테스트234',
      isCompleted: false,
      userId: 2979,
    },
    {
      id: 8094,
      todo: '테스트테스트 테스트',
      isCompleted: false,
      userId: 2979,
    },
    {
      id: 8095,
      todo: '테 스 트 테 스 트',
      isCompleted: true,
      userId: 2979,
    },
  ];

  return (
    <TodoListWrapper>
      {!!todos.length && todos.map(todoData => <TodoItem key={todoData.id} todoData={todoData} />)}
    </TodoListWrapper>
  );
};

export default TodoList;
