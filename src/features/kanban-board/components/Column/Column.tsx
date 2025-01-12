"use client";

import { useDroppable } from "@dnd-kit/core";

import TaskCard from "@/features/kanban-board/components/TaskCard";
import type { KanbanColumnProps } from "@/features/kanban-board/components/types";

export const KanbanColumn: React.FC<KanbanColumnProps> = ({ column, tasks }) => {
  const { setNodeRef } = useDroppable({
    id: column.id
  });

  return (
    <div className="select-none w-80 bg-neutral-800 text-neutral-200 rounded-2xl flex flex-col gap-6 p-6">
      <h3>{column.title}</h3>
      <section className="flex-1 flex flex-col gap-4" ref={setNodeRef}>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </section>
    </div>
  );
};
