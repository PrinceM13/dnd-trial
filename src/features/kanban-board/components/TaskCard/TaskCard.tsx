import { KanbanTaskCardProps } from "@/features/kanban-board/components/types";

export const KanbanTaskCard: React.FC<KanbanTaskCardProps> = ({ task }) => {
  return (
    <div className="cursor-grab p-4 rounded-lg bg-neutral-700 text-neutral-200 shadow-md hover:shadow-lg">
      <h5>{task.title}</h5>
      <p>{task.description}</p>
    </div>
  );
};
