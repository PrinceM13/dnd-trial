"use client";

import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import TodoItem from "@/features/sortable-list/components/TodoItem";
import useTodoList from "./TodoList.hook";

export const TodoList: React.FC = () => {
  const { isClientReady, todos, handleDragEnd } = useTodoList();

  if (!isClientReady) {
    return null;
  }

  return (
    <div className="select-none w-80 bg-neutral-800 text-neutral-200 rounded-2xl flex flex-col gap-6 p-6">
      <h3>Todo List</h3>
      <section className="flex-1 flex flex-col gap-4">
        <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={handleDragEnd}>
          <SortableContext items={todos}>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </SortableContext>
        </DndContext>
      </section>
    </div>
  );
};
