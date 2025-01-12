"use client";

import { DndContext } from "@dnd-kit/core";

import Column from "@/features/kanban-board/components/Column";
import { COLUMNS } from "@/features/kanban-board/constants";

import useBoard from "./Board.hook";

export const KanbanBoard: React.FC = () => {
  const { isClientReady, tasks, handleDragEnd } = useBoard();

  if (!isClientReady) {
    return null;
  }

  return (
    <div className="w-full flex justify-center gap-12">
      <DndContext onDragEnd={handleDragEnd}>
        {COLUMNS.map((column) => (
          <Column
            key={column.id}
            column={column}
            tasks={tasks.filter((task) => task.columnId === column.id)}
          />
        ))}
      </DndContext>
    </div>
  );
};
