import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isAdmin, isAdminPending] = useAdmin()

    if(loading || isAdminPending) {
        return <span>loading....</span>
    }

    if(user && isAdmin){ 
        return children
    } else {
        return <Navigate to="/"></Navigate>
    }
};

export default AdminRoute;