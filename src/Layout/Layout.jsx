import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
    const location = useLocation()
    const disableHeaderFooter = location.pathname.includes('sign-in' || 'sign-up')
    console.log(disableHeaderFooter);

    return (
        <div>
            {disableHeaderFooter || <Header></Header>}
            <Outlet></Outlet>
            {disableHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Layout;