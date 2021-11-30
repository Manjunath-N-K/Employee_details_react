import React,{useState,useEffect} from 'react';
import _ from 'lodash';
import Task from './Task';
import {useFetch} from '../hooks/useFetch';
import Header from './Header';
import { useGlobalContext } from '../context/context';

const TaskList = () => {

  
  const {loading,handleRemoveTask,tasks,setTasks}=useGlobalContext();
  console.log(handleRemoveTask,'remove task');
  console.log(loading);
 
  
  const [page,setPage]=useState(0)



  // const handlePage=(index)=>{
  //   setPage(index);
  // }

  // const prevPage=()=>{
  //   setPage((oldPage)=>{
  //     let prevPage=oldPage-1;
  //     if(prevPage<0){
  //       prevPage=datas.length-1
  //     }
  //     return prevPage;
  //   })
  // }

  // const nextPage=()=>{
  //   setPage((oldPage)=>{
  //     let nextPage=oldPage+1;
  //     if(nextPage>datas.length-1){
  //       nextPage=0
  //     }
  //     return nextPage;
  //   })
  // } 

  

  return (


    <React.Fragment>
     <Header />
      <div className="task-list">
        
        { (!_.isEmpty(tasks) && loading)?(
          
          
        tasks.map((task) => (
            <Task key={task.id} {...task} handleRemoveTask={handleRemoveTask} />
        
          )) 
        
    //     <div className='btn-container'>
    //   <button className='prev-btn' onClick={prevPage}>prev</button>
    //   {datas.map((item,index)=>{
    //     return(
    //       <button key={index} className={`page-btn ${index===page ? 'active-btn':null}`}  onClick={()=>handlePage(index)}>
    //         {index+1}
    //       </button>
    //     )
    //   })}
    //   <button className='next-btn' onClick={nextPage}>next</button>

    // </div>
         
        )
       
    : (
          <p className="message">No Employee available. Please add some .</p>
        )}
      </div>
    </React.Fragment>
  );
};



export default TaskList;