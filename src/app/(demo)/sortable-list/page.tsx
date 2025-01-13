import { SortableList } from "@/features";

export default function SortableListPage() {
  return (
    <div className="flex flex-col gap-12">
      <h2 className="text-neutral-200">Sortable List Page</h2>
      <SortableList.TodoList />
    </div>
  );
}
