import React, { useRef, useState } from "react";
import { Todo } from "@/types";

type Props = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
};

const Input: React.FC<Props> = ({ todos, addTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todo, setTodo] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Todo = {
      id: todos.length,
      title: todo,
      completed: false,
    };

    // setTodos([...todos, newTodo]);
    addTodo(newTodo);
    setTodo("");
    inputRef.current?.blur();
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        className="w-full flex-1 border p-2"
        type="text"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-400">
        Add
      </button>
    </form>
  );
};

export default Input;
