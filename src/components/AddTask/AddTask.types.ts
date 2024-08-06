export type NewTask = { text: string; completed: boolean };

export interface AddTaskProps {
  addTask: (task: NewTask) => void;
}
