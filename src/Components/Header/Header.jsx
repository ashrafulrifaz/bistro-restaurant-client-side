import { Link, NavLink } from "react-router-dom";
import defaultUser from '../../../assets/icon/user.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";

const Header = () => {
    const {user, signOutUser} = useContext(AuthContext)

    return (
        <div className="py-4 uppercase fixed z-10 w-full bg-[#0000005c]">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                <Link to="/">
                    <h2 className="font-main text-xl font-extrabold leading-none text-white">bistro boss <br/> <span className="text-base font-bold tracking-[3px]">restaurant</span></h2>
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
                            {
                                user ?
                                <div onClick={() => signOutUser()} className="flex gap-1 items-center text-white font-bold text-sm cursor-pointer">sign Out <img src={user?.photoUrl ? user.photoUrl : defaultUser} alt="user" className="w-[26px] h-[26px]" /></div>                                 
                                :
                                <NavLink to="/sign-in">
                                    <button className="text-white font-bold">Sign In</button>
                                </NavLink>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;