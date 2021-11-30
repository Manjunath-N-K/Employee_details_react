import React,{useState} from 'react'
import privateRouter from './PrivateRouter';
import {useGlobalContext} from '../context/context'
import {  useHistory } from 'react-router';
import { Form, Button } from 'react-bootstrap';


import AppRouter from '../router/AppRouter';

function LoginForm() {
    
  const {loading,setLoading}=useGlobalContext()
  console.log(loading);


    const login=privateRouter[0];
    const admin=login.id;
    const pass=login.password;
   
    
    const [user,setUser]=useState('');
    const [errorMsg,setErrorMsg]=useState('')
    const history=useHistory();
   
    const [password,setPassword]=useState('');
    const handleOnSubmit=(e)=>{
        e.preventDefault();
      
       if(user===admin && password===pass){
           console.log('successfull');
           setLoading(true);

      history.push('/login');     
       }else{
           console.log('un --sucess');
           setLoading(false);
           setErrorMsg('Pls enter correct username/password')
       }
    }
    

    return(
       
      <div>

     

      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <h1>Login Form</h1>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Enter user Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="employee_name"
            value={user}
            placeholder="Enter user name "
            onChange={(e)=>setUser(e.target.value)}
          />
        </Form.Group>
        

        <Form.Group controlId="time">
          <Form.Label>Employee password</Form.Label>
          <Form.Control
            className="input-control"
            type="password"
            name="employee_salary"
            value={password}
            placeholder="Enter password"
            onChange={(e)=>setPassword(e.target.value)}
          />
           
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
       </div>
   
    )
}

export default LoginForm;
