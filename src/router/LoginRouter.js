import React from 'react'
import { AppProvider, useGlobalContext } from '../context/context';
import LoginForm from '../login/LoginForm';
import AppRouter from './AppRouter';
import FinalRouter from './FinalRouter'

import {createStore} from 'redux'
import { Provider } from 'react-redux';
import reducer from '../context/reducer'

const store=createStore(reducer);


function LoginRouter() {
 
    
    return (
        <AppProvider>
           
            <AppRouter />

        </AppProvider>
    )
}

export default LoginRouter
