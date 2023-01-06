import { AppProps } from 'next/app';
import { useState } from 'react';

import '@/styles/globals.css';
import '@/styles/colors.css';

import { TodoProvider } from '@/store/TodoProvider';

import { Todo } from '@/types/Todo';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addNewTodo = (taskName: string) => {
    setTodos([
      ...todos,
      {
        taskName,
        isComplete: false,
      },
    ]);
  };
  const deleteTodo = (index: number) => {
    if (index < todos.length) {
      setTodos([...todos.filter((_, indx) => indx !== index)]);
    }
  };
  const updateTodo = (newTodo: Todo, index: number) => {
    if (index < todos.length) {
      setTodos([...todos.splice(index, 1, newTodo)]);
    }
  };
  const toggleCompleteTodo = (index: number) => {
    if (index < todos.length) {
      const newlist = todos;
      newlist[index].isComplete = !newlist[index].isComplete;
      setTodos([...newlist]);
    }
  };
  return (
    <TodoProvider.Provider
      value={{ todos, addNewTodo, deleteTodo, updateTodo, toggleCompleteTodo }}
    >
      <Component {...pageProps} />
    </TodoProvider.Provider>
  );
}

export default MyApp;
