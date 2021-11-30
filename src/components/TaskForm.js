import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';


const TaskForm = (props) => {
  console.log(props);
  const [employee, setEmployee] = useState({
     employee_name : props.employee ? props.task.employee_name : '',
    employee_age: props.employee? props.task.employee_age : '',
    Salary: props.employee ? props.task.employee_salary: '',
  });

  

  const [errorMsg, setErrorMsg] = useState('');
  const { employee_name,employee_age,employee_salary } = employee;
  const {employee_name:names,employee_age:age,employee_salary:salary}=(props.task)?props.task:employee

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [employee_name,employee_age,employee_salary ];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
     
    });

    if (allFieldsFilled) {
      const task = {
       id: uuidv4(),
        employee_name,
        employee_age,
        employee_salary
      };
      props.handleOnSubmit(task);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name,value)
    
    switch (name) { 
     
      default:
        setEmployee((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {props.task?<h1>Enter edit details</h1>:<h1>Enter the new Emp details</h1>}
      
      {
        (props.task) && 
          <h4>Name:{names}  Age:{age}  salary:{salary}</h4>
      }
      


      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="employee_name"
            value={employee_name}
            placeholder="Enter name of employee"
            onChange={handleInputChange}
          />
        </Form.Group>
        
        
        <Form.Group controlId="date">
          <Form.Label>Employee Age</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
           name="employee_age"
          value={employee_age}
            placeholder="Enter the Age"
            onChange={handleInputChange}
          /> 
        </Form.Group>

        <Form.Group controlId="time">
          <Form.Label>Employee Salary</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="employee_salary"
            value={employee_salary}
            placeholder="Enter the Salary"
            onChange={handleInputChange}
          />
           
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
        <Link to='/login' variant="primary" className='submit-btn'>
          Back to home
        </Link>
      </Form>
    </div>
  );
};






export default TaskForm;