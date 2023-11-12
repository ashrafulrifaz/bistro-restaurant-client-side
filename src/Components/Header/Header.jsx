import { Link, NavLink } from "react-router-dom";
import defaultUser from '../../../assets/icon/user.png'

const Header = () => {
    return (
        <div className="py-4 uppercase">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                <Link to="/">
                    <h2 className="font-main text-2xl font-extrabold leading-none">bistro boss <br/> <span className="text-lg font-bold tracking-[5px]">restaurant</span></h2>
                </Link>
                <div>
                    <ul className="home_nav flex gap-4">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard">dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu">our menu</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop">out shop</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sign-out">
                                <div className="flex gap-3 items-center">sign out <img src={defaultUser} alt="" /></div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;