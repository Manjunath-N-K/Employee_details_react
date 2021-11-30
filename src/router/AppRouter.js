import React,{useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import PrivateRouter from '../login/PrivateRouter'
import EditTask from '../components/EditTask';
import data from '../hooks/data';
import LoginForm from '../login/LoginForm';
import { AppProvider, useGlobalContext } from '../context/context';
import Error from '../login/Error';

//redux


const AppRouter = () => {


 
const {loading,tasks,setTasks}=useGlobalContext();

console.log('data',data[0].id);
  return (
  
    <BrowserRouter>
      <div>
       {/* <Header /> */}
        <div className="main-content">
          <Switch>
          <Route path='/' exact>
            <LoginForm />
            </Route>
            
            <Route
              render={(props) => (
               
                <TaskList {...props} tasks={tasks} setTasks={setTasks} />
              )}
              path="/login"
              exact={true}
            />
            <Route
              render={(props) => (

                <AddTask {...props} tasks={tasks} setTasks={setTasks} />
              )}
              path="/add"
            />
            <Route
              render={(props) => (
                <EditTask {...props} tasks={tasks} setTasks={setTasks} />
              )}
              path="/edit/:id"
            />
             <Route path='*'>
                <Error   />
             </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  
 
  );
};



export default AppRouter;