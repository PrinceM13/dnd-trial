"use client";

import { useEffect, useState } from "react";
import { ArrowDown, MoveVertical } from "lucide-react";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import type { TodoItemProps } from "@/features/sortable-list/components/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { isDragging, attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: todo.id
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isDragging && isOpen) {
      setIsOpen(false);
    }
  }, [isDragging, isOpen]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

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

        <div
          className={cn(
            "overflow-hidden transition-all duration-500",
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <p className="text-neutral-200 bg-teal-600 mt-4 p-4 w-full text-xl rounded-lg">
            More details 1...
          </p>
          <p className="text-neutral-200 bg-teal-600 mt-4 p-4 w-full text-xl rounded-lg">
            More details 2...
          </p>
          <p className="text-neutral-200 bg-teal-600 mt-4 p-4 w-full text-xl rounded-lg">
            More details 3...
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <Button {...attributes} {...listeners} className="cursor-move">
          <MoveVertical
            className={cn("text-neutral-500 transition-colors duration-300", {
              "text-teal-400": isDragging
            })}
          />
        </Button>
        <Button variant="ghost" onClick={handleToggle} className="cursor-pointer">
          <ArrowDown
            className={cn("text-neutral-400 transition-transform duration-300", {
              "rotate-180 text-amber-400": isOpen
            })}
          />
        </Button>
      </section>
    </div>
  );
};
