import { useContext } from "react";
import TodoContext from "@/context/TodoContext";

const useTodoContext = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodoContext must be used with TodoProvider");
  }

  return context;
};

export default useTodoContext;
