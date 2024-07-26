import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./constants";

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type AddTodoAction = {
  type: typeof ADD_TODO;
  payload: Todo;
};

export type UpdateTodoAction = {
  type: typeof UPDATE_TODO;
  payload: Todo;
};

export type DeleteTodoAction = {
  type: typeof DELETE_TODO;
  payload: number;
};

export type TodoActions = AddTodoAction | UpdateTodoAction | DeleteTodoAction;
