import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext(null)

const Provider = ({children}) => {
    const [menuItem, setMenuItem] = useState([])

    useEffect(() => {
        axios.get('menu.json')
            .then(res => {
                setMenuItem(res.data)
            })
    }, [])

    const info = {
        menuItem
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;