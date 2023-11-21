import useMenu from "../../../../Hooks/useMenu";
import ItemsCard from "./ItemsCard";

const ManageItems = () => {
    const [menuItem, refetch, isMenuPending] = useMenu()

    return (
        <div className="py-6 px-20 bg-[#F6F6F6] min-h-screen">
            <div className="text-center">
                <h3 className="text-[#D99904] italic">---Hurry Up!---</h3>
                <div className="inline-block py-2 px-10 my-4 border-t-2 border-b-2 border-[#E8E8E8]">
                    <h2 className="text-2xl uppercase">manage all items</h2>
                </div>
            </div>
            <div className="bg-white mt-10 p-10">
                <div className="flex justify-between items-center">
                    <h2 className="uppercase font-main font-bold text-2xl">total items: {isMenuPending ? <span className="loading loading-spinner loading-xs"></span> : menuItem?.length}</h2>
                </div>
                <div className="overflow-x-auto mt-8">
                    <table className="table">
                        <thead className="bg-[#D1A054] text-white uppercase">
                            <tr>
                                <th>#</th>
                                <th>Item Image</th>
                                <th>item name</th>
                                <th>price</th>
                                <th>action</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menuItem?.map((item, idx) => <ItemsCard key={idx} item={item} id={idx} refetch={refetch}></ItemsCard>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;