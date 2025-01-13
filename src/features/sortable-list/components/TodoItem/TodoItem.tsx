import type { TodoItemProps } from "@/features/sortable-list/components/types";

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div className="cursor-grab p-4 rounded-lg bg-neutral-700 text-neutral-200 shadow-md hover:shadow-lg">
      <h5>{todo.title}</h5>
      <p className="text-neutral-400">{todo.description}</p>
    </div>
  );
};
