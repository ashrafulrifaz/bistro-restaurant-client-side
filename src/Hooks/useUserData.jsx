import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";

const useUserData = () => {
    const {user} = useContext(AuthContext)
    
    return user
};

export default useUserData;