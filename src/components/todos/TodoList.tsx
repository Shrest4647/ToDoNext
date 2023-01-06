import { useContext } from 'react';

import { TodoProvider } from '@/store/TodoProvider';

import TodoItem from './TodoItem';

export function TodoList() {
  const todoCtx = useContext(TodoProvider);
  return (
    <div className='mx-10 flex max-h-full flex-col justify-center gap-2'>
      {todoCtx?.todos.map((task, index) => (
        <TodoItem key={index} task={task} index={index} />
      ))}
    </div>
  );
}
