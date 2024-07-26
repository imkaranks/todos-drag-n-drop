import { createContext, PropsWithChildren } from "react";
import { Todo } from "@/types";
import useTodoReducer from "@/hooks/useTodoReducer";

type initialContextState = {
  state: Todo[];
  addTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
} | null;

const TodoContext = createContext<initialContextState>(null);

export const TodoProvider = ({ children }: PropsWithChildren) => {
  const { state, addTodo, updateTodo, deleteTodo } = useTodoReducer();

  return (
    <TodoContext.Provider value={{ state, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
