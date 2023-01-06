import { createContext } from 'react';

import { Todo } from '@/types/Todo';
interface AppContextInterface {
  todos: Todo[];
  addNewTodo: (taskName: string) => void;
  deleteTodo: (index: number) => void;
  updateTodo: (newTodo: Todo, index: number) => void;
  toggleCompleteTodo: (index: number) => void;
}

export const TodoProvider = createContext<AppContextInterface | null>(null);
