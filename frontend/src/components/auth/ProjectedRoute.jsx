import { Navigation } from 'lucide-react';
import React, { Children } from 'react'
import { Navigate, useLocation } from 'react-router-dom';

const ProjectedRoute = ({children}) => {
   const isAuthenticated = true;
   const loading = false;
   const location =useLocation();

   if(loading){
    return <div>Loading ....</div>;
   }

   if(!isAuthenticated){
    return <Navigate to="/login" state={{from:location}}/>
   }

   return children;
}

export default ProjectedRoute
