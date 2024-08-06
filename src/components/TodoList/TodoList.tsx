import { memo } from "react";
import { List } from "@mui/material";
import ToDoItem from "../TodoItem/TodoItem";
import { TodoListProps } from "./TodoList.types";

const TodoList = memo(
  ({ tasks, deleteTask, toggleTaskCompletion }: TodoListProps) => {
    return (
      <List>
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))}
      </List>
    );
  }
);

export default TodoList;
