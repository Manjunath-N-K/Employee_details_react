import React from 'react';

import TaskForm from './TaskForm';
import { useParams } from 'react-router-dom';

const EditTask = ({ history, tasks, setTasks }) => {
  const { id } = useParams();
  const taskToEdit = tasks.find((task) => task.id === id);

  const handleOnSubmit = (task) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks([task, ...filteredTasks]);
    history.push('/login');
  };

  return (
    <div>
      <TaskForm task={taskToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditTask;