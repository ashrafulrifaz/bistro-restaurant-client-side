import { useQuery } from "@tanstack/react-query";
import useUserData from "./useUserData";

const useCart = () => {
    const user = useUserData()
    const { refetch, isPending, data: cartData } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
        fetch(`http://localhost:5000/cart?email=${user?.email}`)
        .then(
            (res) => res.json(),
        ),
    })

    return [cartData, isPending, refetch]
};

export default useCart;