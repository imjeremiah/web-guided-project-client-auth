import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => {
        if (localStorage.getItem('token')) {
            return <Component {...props}/>
        } else {
            return <Redirect to='/login' />
        }
    }} />
}

export default ProtectedRoute;