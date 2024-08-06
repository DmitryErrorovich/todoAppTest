import { useCallback, useState } from "react";
import { Container, Typography } from "@mui/material";
import ToDoList from "./components/TodoList/TodoList";
import AddTask from "./components/AddTask/AddTask";
import { Task } from "./components/TodoList/TodoList.types";
import { NewTask } from "./components/AddTask/AddTask.types";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const generateUniqueId = () => {
    return Date.now() + Math.random().toString(36).substr(2, 9);
  };

  const addTask = useCallback(
    (task: NewTask) => {
      setTasks([...tasks, { ...task, id: generateUniqueId() }]);
    },
    [tasks]
  );

  const deleteTask = useCallback(
    (taskToDeleteId: string) => {
      setTasks(tasks.filter((task) => task.id !== taskToDeleteId));
    },
    [tasks]
  );

  const toggleTaskCompletion = useCallback(
    (taskToToggleId: string) => {
      setTasks(
        tasks.map((task) =>
          task.id === taskToToggleId
            ? { ...task, completed: !task.completed }
            : task
        )
      );
    },
    [tasks]
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        To-Do List
      </Typography>
      <AddTask addTask={addTask} />
      <ToDoList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </Container>
  );
};

export default App;
