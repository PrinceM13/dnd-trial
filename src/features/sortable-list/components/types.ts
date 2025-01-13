export type Todo = {
  id: string;
  title: string;
  description: string;
};

export type TodoListProps = {
  todos: Todo[];
};

export type TodoItemProps = {
  todo: Todo;
};
