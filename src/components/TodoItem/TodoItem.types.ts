import { Task, TodoListProps } from "../TodoList/TodoList.types";

export interface TodoItemProps extends Omit<TodoListProps, "tasks"> {
  task: Task;
}
