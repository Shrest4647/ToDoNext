import React, { useContext } from 'react';
import { HiTrash } from 'react-icons/hi';

import { TodoProvider } from '@/store/TodoProvider';

import Button from '../buttons/Button';

import { Todo } from '@/types/Todo';

type TodoItemProps = {
  task: Todo;
  index: number;
};

export function TodoItem({ task, index }: TodoItemProps) {
  const todoCtx = useContext(TodoProvider);
  return (
    <div className='border-1 mb-4 flex w-full items-center rounded border-gray-100 p-4 shadow-md'>
      <input
        type='checkbox'
        className='form-checkbox mr-2 h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
        checked={task.isComplete}
        onChange={() => todoCtx?.toggleCompleteTodo(index)}
      />
      <div className='flex-1 justify-start px-4 text-start text-gray-700'>
        {task.taskName}
      </div>
      <Button
        variant='ghost'
        leftIcon={HiTrash}
        onClick={() => todoCtx?.deleteTodo(index)}
      >
        Delete
      </Button>
    </div>
  );
}

export default TodoItem;
