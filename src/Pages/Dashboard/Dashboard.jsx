import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping, faBars, faBook, faCalendarCheck, faCalendarDays, faEnvelope, faHouse, faList, faShoppingCart, faUserGroup, faUtensils, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin] = useAdmin()

    return (
        <div className="grid grid-cols-5 min-h-screen">
            <div className="p-7 h-full bg-[#D1A054] text-[#151515]">
                <Link to="/">
                    <h2 className="font-main text-2xl font-extrabold leading-none">bistro boss <br/> <span className="text-xl font-bold tracking-[3px]">restaurant</span></h2>
                </Link>
                <ul className="mt-8">
                    { isAdmin ? 
                    <div className="space-y-4">
                        <li>
                            <NavLink to="/dashboard/admin-home" className="flex gap-2 cursor-pointer hover:text-white transition-colors">
                                <FontAwesomeIcon icon={faHouse}/>
                                <span className="uppercase font-main font-semibold">Admin Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/add-item" className="flex gap-2 cursor-pointer hover:text-white transition-colors">
                                <FontAwesomeIcon icon={faUtensils}/>
                                <span className="uppercase font-main font-semibold">add items</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/manage-items" className="flex gap-2 cursor-pointer hover:text-white transition-colors">
                                <FontAwesomeIcon icon={faList}/>
                                <span className="uppercase font-main font-semibold">manage items</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/manage-bookings" className="flex gap-2 cursor-pointer hover:text-white transition-colors">
                                <FontAwesomeIcon icon={faBook}/>
                                <span className="uppercase font-main font-semibold">manage bookings</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/all-users" className="flex gap-2 cursor-pointer hover:text-white transition-colors">
                                <FontAwesomeIcon icon={faUserGroup}/>
                                <span className="uppercase font-main font-semibold">all users</span>
                            </NavLink>
                        </li>
                    </div>
                    :
                    <div className="space-y-4">
                        <li>
                            <NavLink to="/dashboard/home" className="flex gap-2 cursor-pointer hover:text-white transition-colors">
                                <FontAwesomeIcon icon={faHouse}/>
                                <span className="uppercase font-main font-semibold">user Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/reservation" className="flex gap-2 cursor-pointer hover:text-white transition-colors">
                                <FontAwesomeIcon icon={faCalendarDays}/>
                                <span className="uppercase font-main font-semibold">reservation</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/payment-history" className="flex gap-2 cursor-pointer hover:text-white transition-colors">
                                <FontAwesomeIcon icon={faWallet}/>
                                <span className="uppercase font-main font-semibold">payment history</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/my-cart" className="flex gap-2 cursor-pointer hover:text-white transition-colors">
                                <FontAwesomeIcon icon={faShoppingCart}/>
                                <span className="uppercase font-main font-semibold">my cart</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/add-review" className="flex gap-2 cursor-pointer hover:text-white transition-colors">
                                <FontAwesomeIcon icon={faCommentDots}/>
                                <span className="uppercase font-main font-semibold">add review</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/my-booking" className="flex gap-2 cursor-pointer hover:text-white transition-colors">
                                <FontAwesomeIcon icon={faCalendarCheck}/>
                                <span className="uppercase font-main font-semibold">my booking</span>
                            </NavLink>
                        </li>
                    </div>}

                    <hr className="my-5"/>

                    <div className="space-y-4">
                        <li>
                            <NavLink to="/" className="flex gap-2 cursor-pointer hover:text-white transition-colors">
                                <FontAwesomeIcon icon={faHouse}/>
                                <span className="uppercase font-main font-semibold">Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/add-items" className="flex gap-2 cursor-pointer hover:text-white transition-colors">
                                <FontAwesomeIcon icon={faBars}/>
                                <span className="uppercase font-main font-semibold">menu</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/manage-items" className="flex gap-2 cursor-pointer hover:text-white transition-colors">
                                <FontAwesomeIcon icon={faBagShopping}/>
                                <span className="uppercase font-main font-semibold">shop</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/add-item" className="flex gap-2 cursor-pointer hover:text-white transition-colors">
                                <FontAwesomeIcon icon={faEnvelope}/>
                                <span className="uppercase font-main font-semibold">contact</span>
                            </NavLink>
                        </li>
                    </div>
                </ul>
            </div>
            <div className="col-span-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;