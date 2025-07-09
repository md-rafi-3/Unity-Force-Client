import React, {  useContext } from 'react';
import { Navigate, useLocation} from 'react-router';
import { AuthContext } from '../Context/AuthConrext';
import Loading from '../Components/Loading';

const PrivetRoute = ({children}) => {
 
    const {user,loading}=useContext(AuthContext);
    const location=useLocation()
   

  if(loading){
    return <Loading></Loading>;
  }
    if(user && user?.email){
        return  children;
    }

    else{
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }

   
    
};

export default PrivetRoute;