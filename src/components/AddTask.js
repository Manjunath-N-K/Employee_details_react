import React from 'react';

import TaskForm from './TaskForm';

const AddTask = ({history,tasks,setTasks}) => {
  const handleOnSubmit = (task) => {
    console.log(task);
    setTasks([task,...tasks]);
    history.push('/login');
    console.log(tasks);
  };

  return (
    <React.Fragment>
      <TaskForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddTask;