import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { AddTaskProps } from "./AddTask.types";

const AddTask = ({ addTask }: AddTaskProps) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask({ text: taskText, completed: false });
      setTaskText("");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mb={2}>
      <TextField
        label="New Task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Task
      </Button>
    </Box>
  );
};

export default AddTask;
