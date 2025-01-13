"use client";

import { MoveVertical } from "lucide-react";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import type { TodoItemProps } from "@/features/sortable-list/components/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { isDragging, attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: todo.id
  });

  const style = {
    zIndex: isDragging ? 999 : 1,
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="p-4 flex justify-between rounded-lg bg-neutral-700 text-neutral-200 shadow-md hover:shadow-lg"
    >
      <section>
        <h5>{todo.title}</h5>
        <p className="text-neutral-400">{todo.description}</p>
      </section>
      <Button {...attributes} {...listeners} className="cursor-move">
        <MoveVertical
          className={cn("text-neutral-500 transition-colors duration-300", {
            "text-teal-400": isDragging
          })}
        />
      </Button>
    </div>
  );
};
