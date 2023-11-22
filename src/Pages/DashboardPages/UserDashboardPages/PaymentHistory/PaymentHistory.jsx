import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useUserData from "../../../../Hooks/useUserData";
import PaymentHistoryCard from "./PaymentHistoryCard";

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure()
    const user = useUserData()

    const { isPending, data: payment = [] } = useQuery({
        queryKey: ['payment'],
        queryFn: async () => { 
            const res = await axiosSecure.get(`/payment/${user?.email}`)
            return res.data
        }
    })
    
    return (
        <div className="py-6 px-20 bg-[#F6F6F6] min-h-screen">
            <div className="text-center">
                <h3 className="text-[#D99904] italic">---At A Glance---</h3>
                <div className="inline-block py-2 px-10 my-4 border-t-2 border-b-2 border-[#E8E8E8]">
                    <h2 className="text-2xl uppercase">payment history</h2>
                </div>
            </div>
            <div className="bg-white mt-10 p-10">
                <div className="flex justify-between items-center">
                    <h2 className="uppercase font-main font-bold text-2xl">total payments: {isPending ? <span className="loading loading-spinner loading-xs"></span> : payment?.length}</h2>
                </div>
                <div className="overflow-x-auto mt-8">
                    <table className="table">
                        <thead className="bg-[#D1A054] text-white uppercase">
                            <tr>
                                <th>email</th>
                                <th>status</th>
                                <th>total price</th>
                                <th>payment date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payment && payment?.map((item, idx) => <PaymentHistoryCard key={idx} item={item}></PaymentHistoryCard>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;