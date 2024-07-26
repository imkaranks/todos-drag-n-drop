import { useEffect, useReducer } from "react";
import { Todo } from "@/types";
import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "@/constants";
import todoReducer from "@/reducers/todoReducer";

const LOCAL_STORAGE_KEY = "todos";

const loadInitialState = (): Todo[] => {
  const savedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (savedTodos) {
    return JSON.parse(savedTodos) as Todo[];
  }

  return [];
};

const useTodoReducer = () => {
  const [state, dispatch] = useReducer(todoReducer, loadInitialState());

  const addTodo = (todo: Todo) => {
    dispatch({ type: ADD_TODO, payload: todo });
  };

  const updateTodo = (todo: Todo) => {
    dispatch({ type: UPDATE_TODO, payload: todo });
  };

  const deleteTodo = (id: number) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return { state, addTodo, updateTodo, deleteTodo };
};

export default useTodoReducer;
