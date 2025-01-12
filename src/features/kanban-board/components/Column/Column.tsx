import { KanbanColumnProps } from "@/features/kanban-board/components/types";
import TaskCard from "@/features/kanban-board/components/TaskCard";

export const KanbanColumn: React.FC<KanbanColumnProps> = ({ column, tasks }) => {
  return (
    <div className="select-none w-80 bg-neutral-800 text-neutral-200 rounded-2xl flex flex-col gap-6 p-6">
      <h3>{column.title}</h3>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};
