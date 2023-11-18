import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
    const location = useLocation()
    const disableHeaderFooter = location.pathname.includes('sign-in')
    const disableFooterHeader = location.pathname.includes('sign-up')

    return (
        <div>
            {disableHeaderFooter || disableFooterHeader || <Header></Header>}
            <Outlet></Outlet>
            {disableHeaderFooter || disableFooterHeader || <Footer></Footer>}
        </div>
    );
};

export default Layout;