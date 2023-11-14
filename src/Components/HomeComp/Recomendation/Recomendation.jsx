import { useContext } from "react";
import { AuthContext } from "../../../Provider/Provider";
import RecommendCard from "./RecommendCard";

const Recomendation = () => {
    const {menuItem} = useContext(AuthContext)

    return (
        <div className="py-10 text-center">
            <div>
                <h3 className="text-[#D99904] italic">---Should Try---</h3>
                <div className="inline-block py-2 px-10 my-4 border-t-2 border-b-2 border-[#E8E8E8]">
                    <h2 className="text-2xl uppercase">chef recommends</h2>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-5">
                {
                    menuItem && menuItem.map((item, idx) => <RecommendCard key={idx} item={item}></RecommendCard>).slice(0, 3)
                }
            </div>
        </div>
    );
};

export default Recomendation;