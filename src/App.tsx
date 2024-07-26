import React from "react";
import Input from "@/components/Input";
import TodoList from "@/components/TodoList";
import useTodoContext from "@/hooks/useTodoContext";

const App: React.FC = () => {
  const { state, addTodo, updateTodo, deleteTodo } = useTodoContext();

  return (
    <main className="mx-auto w-11/12 max-w-screen-2xl space-y-4 py-8">
      <h1 className="mb-4 text-center text-3xl font-semibold">Tasks</h1>

      <Input todos={state} addTodo={addTodo} />
      <TodoList todos={state} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </main>
  );
};

export default App;
