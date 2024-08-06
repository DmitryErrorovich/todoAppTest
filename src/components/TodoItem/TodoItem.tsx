import { memo } from "react";
import { ListItem, ListItemText, Checkbox, IconButton } from "@mui/material";
import { TodoItemProps } from "./TodoItem.types";

const TodoItem = memo(
  ({ task, deleteTask, toggleTaskCompletion }: TodoItemProps) => {
    return (
      <ListItem>
        <Checkbox
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
        />
        <ListItemText
          sx={{ textDecoration: task.completed ? "line-through" : "auto" }}
          primary={task.text}
        />
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </IconButton>
      </ListItem>
    );
  }
);

export default TodoItem;
