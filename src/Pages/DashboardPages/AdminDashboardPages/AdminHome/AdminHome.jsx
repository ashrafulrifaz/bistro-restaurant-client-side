import { faPizzaSlice, faTruck, faUserGroup, faWallet } from "@fortawesome/free-solid-svg-icons";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminHome = () => {
    const axiosSecure = useAxiosSecure()    
    const { data: status } = useQuery({
        queryKey: ['menu'],
        queryFn: async () =>{            
            const res = await axiosSecure.get('/admin-status')
            return res.data
        }
    })
    const {revenueCount, usersCount, productsCount, ordersCount} = status || {}

    return (
        <div className="py-10 px-5">
            <h2 className="font-main font-bold text-2xl">Welcome Back</h2>
            <div className="grid grid-cols-4 gap-5 my-5">
                <div className="p-6 rounded-md flex justify-center items-center gap-5 text-white bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]">
                    <FontAwesomeIcon icon={faWallet} className="text-[40px]"></FontAwesomeIcon>
                    <div>
                        <h3 className="text-3xl font-bold">{revenueCount || 0}</h3>
                        <p className="text-lg">Revenue</p>
                    </div>
                </div>
                <div className="p-6 rounded-md flex justify-center items-center gap-5 text-white bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
                    <FontAwesomeIcon icon={faUserGroup} className="text-[40px]"></FontAwesomeIcon>
                    <div>
                        <h3 className="text-3xl font-bold">{usersCount || 0}</h3>
                        <p className="text-lg">Customers</p>
                    </div>
                </div>
                <div className="p-6 rounded-md flex justify-center items-center gap-5 text-white bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
                    <FontAwesomeIcon icon={faPizzaSlice} className="text-[40px]"></FontAwesomeIcon>
                    <div>
                        <h3 className="text-3xl font-bold">{productsCount || 0}</h3>
                        <p className="text-lg">Products</p>
                    </div>
                </div>
                <div className="p-6 rounded-md flex justify-center items-center gap-5 text-white bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]">
                    <FontAwesomeIcon icon={faTruck} className="text-[40px]"></FontAwesomeIcon>
                    <div>
                        <h3 className="text-3xl font-bold">{ordersCount || 0}</h3>
                        <p className="text-lg">Orders</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;