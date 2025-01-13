"use client";

import { useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import { DragEndEvent } from "@dnd-kit/core";
import { useClientReady } from "@/hooks";
import { INITIAL_TODOS } from "@/features/sortable-list/constants";

const useTodoList = () => {
  const isClientReady = useClientReady();
  const [todos, setTodos] = useState(INITIAL_TODOS);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setTodos((prevTodos) => {
        const currentTodoIndex = prevTodos.findIndex((todo) => todo.id === active.id);
        const newTodoIndex = prevTodos.findIndex((todo) => todo.id === over.id);

        return arrayMove(prevTodos, currentTodoIndex, newTodoIndex);
      });
    }
  };

  return {
    isClientReady,
    todos,
    handleDragEnd
  };
};

export default useTodoList;
