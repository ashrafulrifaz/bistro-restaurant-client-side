import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    console.log(loading);
    const location = useLocation()

    if(loading) {
        return <span>loading....</span>
    }

    if(user){ 
        return children
    } else {
        return <Navigate state={location.pathname} to="/sign-in"></Navigate>
    }
};

export default PrivateRoute;