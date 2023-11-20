import useCart from "../../../../Hooks/UseCart";
import MyCartItem from "./MyCartItem";

const MyCart = () => {
    const [cartData, isPending, refetch] = useCart()
    const totalPrice = cartData?.reduce((total, item) => total + item.price, 0)

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
                    <h2 className="uppercase font-main font-bold text-2xl">total orders: {isPending ? <span className="loading loading-spinner loading-xs"></span> : cartData?.length}</h2>
                    <h2 className="uppercase font-main font-bold text-2xl">total price: ${totalPrice}</h2>
                    <button className="uppercase font-main font-bold text-white bg-[#D1A054] py-2 px-3 rounded-lg">pay</button>
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
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartData?.map((item, idx) => <MyCartItem key={idx} item={item} id={idx} refetch={refetch}></MyCartItem>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;