import { KanbanBoard } from "@/features";

export default function KanbanBoardPage() {
  return (
    <div className="flex flex-col gap-12">
      <h2 className="text-neutral-200">Kanban Board Page</h2>
      <KanbanBoard.Board />
    </div>
  );
}
