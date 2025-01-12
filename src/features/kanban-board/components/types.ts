export type Column = {
  id: string;
  title: string;
};

export type Task = {
  id: string;
  title: string;
  description: string;
  columnId: string;
};

export type KanbanColumnProps = {
  column: Column;
  tasks: Task[];
};

export type KanbanTaskCardProps = {
  task: Task;
};
