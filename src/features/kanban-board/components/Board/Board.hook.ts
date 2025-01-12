import { useState } from "react";
import { DragEndEvent } from "@dnd-kit/core";

import { INITIAL_TASKS } from "@/features/kanban-board/constants";
import type { Task } from "@/features/kanban-board/components/types";
import { useClientReady } from "@/hooks";

const useBoard = () => {
  const isClientReady = useClientReady();

  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) {
      return;
    }

    const taskId = active.id as string;
    const newColumnId = over.id as string;

    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, columnId: newColumnId };
      }

      return task;
    });

    setTasks(updatedTasks);
  };

  return {
    isClientReady,
    tasks,
    handleDragEnd
  };
};

export default useBoard;
