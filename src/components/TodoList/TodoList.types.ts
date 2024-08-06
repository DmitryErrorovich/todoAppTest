export type Task = {
  completed: boolean;
  text: string;
  id: string;
};

export interface TodoListProps {
  tasks: Task[];
  deleteTask: (id: string) => void;
  toggleTaskCompletion: (id: string) => void;
}
