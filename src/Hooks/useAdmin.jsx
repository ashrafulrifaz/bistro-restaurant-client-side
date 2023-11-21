import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useUserData from "./useUserData";

const useAdmin = () => {
    const user = useUserData()
    const axiosSecure = useAxiosSecure()

    const {data: isAdmin, isPending: isAdminPending} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`users/${user?.email}`)
            return res.data.admin
        }
    })

    return [isAdmin, isAdminPending]
    
};

export default useAdmin;
