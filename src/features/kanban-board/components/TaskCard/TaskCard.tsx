"use client";

import { useDraggable } from "@dnd-kit/core";

import { cn } from "@/lib/utils";
import type { KanbanTaskCardProps } from "@/features/kanban-board/components/types";

export const KanbanTaskCard: React.FC<KanbanTaskCardProps> = ({ task }) => {
  const { isDragging, attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id
  });

  const style = {
    transform: `translate3d(${transform?.x ?? 0}px, ${transform?.y ?? 0}px, 0)`,
    zIndex: isDragging ? 999 : 1
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn(
        "cursor-grab p-4 rounded-lg bg-neutral-700 text-neutral-200 shadow-md hover:shadow-lg",
        {
          "cursor-grabbing": isDragging
        }
      )}
    >
      <h5>{task.title}</h5>
      <p className="text-neutral-400">{task.description}</p>
    </div>
  );
};
