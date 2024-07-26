import React from "react";
import { Todo } from "@/types";
import TodoItem from "@/components/TodoItem";

type Props = {
  todos: Todo[];
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
};

const handleDrop = (
  e: React.DragEvent<HTMLDivElement>,
  updateTodo: (todo: Todo) => void,
  completed: boolean,
) => {
  e.preventDefault();
  const todo: Todo = JSON.parse(e.dataTransfer.getData("todo"));
  const updatedTodo = { ...todo, completed };
  updateTodo(updatedTodo);
};

const handleDragStart = (e: React.DragEvent<HTMLLIElement>, todo: Todo) => {
  e.dataTransfer.setData("todo", JSON.stringify(todo));
};

const TodoList: React.FC<Props> = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {["Pending", "Completed"].map((status) => {
        const isCompleted = status === "Completed";
        const filteredTodos = todos.filter(
          (todo) => todo.completed === isCompleted,
        );

        return (
          <div
            key={status}
            className={`min-h-60 ${isCompleted ? "bg-green-100" : "bg-red-100"} p-4`}
            onDrop={(e) => handleDrop(e, updateTodo, isCompleted)}
            onDragOver={(e) => e.preventDefault()}
          >
            <h2 className="mb-2.5 text-center text-lg font-semibold leading-none">
              {status}
            </h2>
            <ol className="divide-y-2">
              {filteredTodos.map((todo) => (
                <li
                  key={todo.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, todo)}
                >
                  <TodoItem
                    {...todo}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                  />
                </li>
              ))}
            </ol>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
