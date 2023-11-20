import { useQuery } from "@tanstack/react-query";
import AllusersCard from "./AllusersCard";

const AllUsers = () => {
    const { isPending, data, refetch } = useQuery({
        queryKey: ['user'],
        queryFn: () =>
          fetch('http://localhost:5000/users')
          .then((res) => res.json()),
      })

    return (
        <div className="py-6 px-20 bg-[#F6F6F6] min-h-screen">
            <div className="text-center">
                <h3 className="text-[#D99904] italic">---My Cart---</h3>
                <div className="inline-block py-2 px-10 my-4 border-t-2 border-b-2 border-[#E8E8E8]">
                    <h2 className="text-2xl uppercase">wanna add more?</h2>
                </div>
            </div>
            <div className="bg-white mt-10 p-10">
                <div className="flex justify-between items-center">
                    <h2 className="uppercase font-main font-bold text-2xl">total users: {isPending ? <span className="loading loading-spinner loading-xs"></span> : data?.length}</h2>
                </div>
                <div className="overflow-x-auto mt-8">
                    <table className="table">
                        <thead className="bg-[#D1A054] text-white uppercase">
                            <tr>
                                <th>#</th>
                                <th>name</th>
                                <th>email</th>
                                <th>role</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((item, idx) => <AllusersCard key={idx} item={item} id={idx} refetch={refetch}></AllusersCard>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;