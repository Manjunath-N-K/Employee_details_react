import React from 'react'
import LoginForm from '../login/LoginForm'
import {useGlobalContext } from '../context/context';
import AppRouter from './AppRouter';



function FinalRouter({children}) {
    const {loading,setLoading}=useGlobalContext();
    console.log(loading,'final');
    return (
        <LoginForm path='/' exact>
            <AppRouter />
        </LoginForm>
    )
}

export default FinalRouter
