import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ProtectedRoutes = () => {

    const userNameGlobal = useSelector((state) => state.userNameGlobal);
 
    if (userNameGlobal) {
        return (
            <>
            <Header/>
                <Outlet />
            <Footer/>
            </>
            
        )
    } else {
        return (
            <Navigate to='/'/>
        )
    }

}

export default ProtectedRoutes