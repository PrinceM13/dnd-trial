"use client";

import { useState } from "react";
import Column from "@/features/kanban-board/components/Column";
import { COLUMNS, INITIAL_TASKS } from "@/features/kanban-board/constants";
import type { Task } from "@/features/kanban-board/components/types";

export const KanbanBoard: React.FC = () => {
  const [tasks] = useState<Task[]>(INITIAL_TASKS);

  return (
    <div className="w-full flex justify-center gap-12">
      {COLUMNS.map((column) => (
        <Column
          key={column.id}
          column={column}
          tasks={tasks.filter((task) => task.columnId === column.id)}
        />
      ))}
    </div>
  );
};
