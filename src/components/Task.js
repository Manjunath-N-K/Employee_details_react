import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Task = ({
  id,
  // taskname,
  // title,
  // Age,
  // Salary,
  employee_name,
  employee_age,
  employee_salary,
  handleRemoveTask
}) => {
      const history = useHistory();
  return (
 
    <Card style={{ width: '22rem' }} className="task">
      <Card.Body>
        <Card.Title className="task-title">{ employee_name}</Card.Title>
        <div className="task-details">
          <div> <strong>Pos Title </strong>: ABc</div>
           {/* <div>Date: {new Date(date).toDateString()}</div> */}
           <div><strong>Age</strong>: {employee_age} </div>
          <div><strong>Salary</strong>: {employee_salary}$ </div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
  Edit
</Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveTask(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>

    
  );
};

export default Task;


// <div>Date: {new Date(date).toDateString()}</div>