import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "@/constants";
import { Todo, TodoActions } from "@/types";

const reducer = (state: Todo[], action: TodoActions) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo,
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
