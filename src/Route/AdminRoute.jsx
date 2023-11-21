import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isAdmin, isAdminPending] = useAdmin()
    const location = useLocation()

    if(loading || isAdminPending) {
        return <span>loading....</span>
    }

    if(user && isAdmin){ 
        return children
    } else {
        return <Navigate state={location.pathname} to="/sign-in"></Navigate>
    }
};

export default AdminRoute;