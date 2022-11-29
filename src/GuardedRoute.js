import React from 'react';
import { Route, Navigate ,Outlet} from "react-router-dom";

function GuardedRoute({ component: Component, auth, ...rest }){
console.log("auth:" + auth)
    return(
        auth ? <Outlet/> : <Navigate to="/"/>
        
    )
}

export default GuardedRoute;


