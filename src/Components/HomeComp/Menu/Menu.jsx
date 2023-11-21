import useMenu from "../../../Hooks/useMenu";
import MenuCard from "./MenuCard";
import { Link } from "react-router-dom";

const Menu = () => {
    const [menuItem] = useMenu()

    return (
        <div className="py-10">
            <div className="text-center">
                <h3 className="text-[#D99904] italic">---Check it out---</h3>
                <div className="inline-block py-2 px-10 my-4 border-t-2 border-b-2 border-[#E8E8E8]">
                    <h2 className="text-2xl uppercase">from out menu</h2>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-5">
                {
                    menuItem && menuItem.map((menu, idx) => <MenuCard key={idx} menu={menu}></MenuCard>).slice(0, 6)
                }
            </div>
            <div className="mt-10 text-center">
                <Link to="/menu">
                    <button className='py-1.5 px-5 rounded-md border-b-2 border-black hover:scale-95 transition-all uppercase'>View full menu</button>
                </Link>
            </div>
        </div>
    );
};

export default Menu;