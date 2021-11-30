import React, { useState, useContext, useEffect } from 'react'
import data from '../hooks/data';
import paginate from '../hooks/paginate';
// make sure to use https

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
 
    const [loading,setLoading]=useState(false);
    const [datas,setDatas]=useState([])
    const [tasks,setTasks]=useState(data)
    console.log(tasks);
 console.log(tasks);

   const handleRemoveTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //   const {loading,data}=useFetch();
//   const [page,setPage]=useState(0)

// useEffect(() => {
//     if(loading) return
//     setTasks(data[page])
    
//   }, [loading,page])

//   const handlePage=(index)=>{
//     setPage(index);
//   }

//   const prevPage=()=>{
//     setPage((oldPage)=>{
//       let prevPage=oldPage-1;
//       if(prevPage<0){
//         prevPage=data.length-1
//       }
//       return prevPage;
//     })
//   }

//   const nextPage=()=>{
//     setPage((oldPage)=>{
//       let nextPage=oldPage+1;
//       if(nextPage>data.length-1){
//         nextPage=0
//       }
//       return nextPage;
//     })
//   } 


// useEffect(() => {
//   setDatas(paginate(tasks))
//   setLoading(false);
// }, [])

  return (
    <AppContext.Provider value={{ loading,setLoading,tasks,setTasks,handleRemoveTask,datas,setDatas }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }