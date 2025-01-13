"use client";

import { useState } from "react";
import TodoItem from "@/features/sortable-list/components/TodoItem";
import { INITIAL_TODOS } from "@/features/sortable-list/constants";

export const TodoList: React.FC = () => {
  const [todos] = useState(INITIAL_TODOS);

  return (
    <div className="select-none w-80 bg-neutral-800 text-neutral-200 rounded-2xl flex flex-col gap-6 p-6">
      <h3>Todo List</h3>
      <section className="flex-1 flex flex-col gap-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </section>
    </div>
  );
};
