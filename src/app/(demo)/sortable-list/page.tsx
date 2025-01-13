import { SortableList } from "@/features";
import { INITIAL_TODOS } from "@/features/sortable-list/constants";

export default function SortableListPage() {
  return (
    <div className="flex flex-col gap-12">
      <h2 className="text-neutral-200">Sortable List Page</h2>
      <SortableList.TodoList todos={INITIAL_TODOS} />
    </div>
  );
}
