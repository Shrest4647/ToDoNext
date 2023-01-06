import { ChangeEventHandler, useContext, useState } from 'react';
import { HiPlus } from 'react-icons/hi';

import { TodoProvider } from '@/store/TodoProvider';

import Button from '../buttons/Button';
export default function TodoInput() {
  const todoCtx = useContext(TodoProvider);
  const [taskName, setTaskName] = useState('');
  const handleClick = () => {
    todoCtx?.addNewTodo(taskName);
  };
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setTaskName(event.currentTarget.value);
  };
  return (
    <div className='items-between mx-10 flex gap-4'>
      <textarea
        className='border-theme-primary focus:border-theme-primary focus:shadow-outline-theme-primary form-input block w-full grow rounded-md border-2 py-2 px-3 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
        placeholder='Add a new task'
        onChange={handleChange}
      ></textarea>
      <Button
        variant='primary'
        leftIcon={HiPlus}
        disabled={!taskName.length}
        onClick={handleClick}
      >
        Add
      </Button>
    </div>
  );
}
