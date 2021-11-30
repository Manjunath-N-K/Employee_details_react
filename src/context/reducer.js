import {EDIT,DELETE,ADD_NEW} from './actions'
import React from 'react'
import data from '../hooks/data'




const initialStore={
   data:data,
   next:0,
   prev:0
};

function reducer(state=initialStore,action) {
    if(action.type===DELETE){
return (console.log('edit done'))
    }
}

export default reducer
