import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
    const axiosPublic = useAxiosPublic()    
    const { data: menuItem, refetch, isPending: isMenuPending } = useQuery({
        queryKey: ['menu'],
        queryFn: async () =>{            
            const res = await axiosPublic.get('/menu')
            return res.data
        }
    })

    return [menuItem, refetch, isMenuPending]
};

export default useMenu;