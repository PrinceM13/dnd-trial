import TodoItem from "@/features/sortable-list/components/TodoItem";
import type { TodoListProps } from "@/features/sortable-list/components/types";

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div className="select-none w-80 bg-neutral-800 text-neutral-200 rounded-2xl flex flex-col gap-6 p-6">
      <h3>Todo List</h3>
      <section className="flex-1 flex flex-col gap-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </section>
    </div>
  );
};
