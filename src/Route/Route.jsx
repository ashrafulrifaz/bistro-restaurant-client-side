import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Cart from "../Pages/Cart/Cart";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyCart from "../Pages/DashboardPages/UserDashboardPages/MyCart/MyCart";
// import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/DashboardPages/AdminDashboardPages/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/DashboardPages/AdminDashboardPages/AddItems/AddItems";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'shop',
                element: <Shop></Shop>
            },
            {
                path: 'shop/:category',
                element: <Shop></Shop>
            },
            {
                path: '/sign-in',
                element: <SignIn></SignIn>
            },
            {
                path: '/sign-up',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <AdminRoute> <Dashboard></Dashboard> </AdminRoute>,
        children: [
            // users
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'my-cart',
                element: <MyCart></MyCart>
            },
            // admin
            {
                path: 'all-users',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'add-item',
                element: <AddItems></AddItems>
            }
        ]
    }
])

export default Route;