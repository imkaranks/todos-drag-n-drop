import React, { useEffect, useRef, useState } from "react";
import { Todo } from "@/types";

type Props = Todo & {
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
};

const TodoItem: React.FC<Props> = ({
  id,
  title,
  completed,
  updateTodo,
  deleteTodo,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>("");
  const [didComplete, setDidComplete] = useState<boolean>(completed);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (edit && editTodo.trim()) {
      const newTodo: Todo = { id, title: editTodo, completed };
      updateTodo(newTodo);
      setEdit(false);
      setEditTodo("");
    } else if (!edit && !editTodo.trim()) {
      setEdit(true);
      setEditTodo(title);
    }
  };

  const onToggle = () => {
    const newTodo = { id, title, completed: !didComplete };
    updateTodo(newTodo);
    setDidComplete(!didComplete);
  };

  useEffect(() => {
    if (edit) {
      inputRef.current?.focus();
    }
  }, [edit]);

  return (
    <div>
      <form className="flex items-center gap-4 p-2" onSubmit={handleSubmit}>
        {edit ? (
          <input
            ref={inputRef}
            type="text"
            className="w-full flex-1 rounded focus:outline-2 focus:outline-offset-1 focus:outline-blue-500"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
        ) : completed ? (
          <s className="flex-1">{title}</s>
        ) : (
          <p className="flex-1">{title}</p>
        )}
        <input type="checkbox" checked={didComplete} onChange={onToggle} />
        <button>{edit ? "Save" : "Edit"}</button>
        <button type="button" onClick={() => deleteTodo(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default TodoItem;
