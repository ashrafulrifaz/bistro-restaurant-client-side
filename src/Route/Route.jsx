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
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/DashboardPages/AdminDashboardPages/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/DashboardPages/AdminDashboardPages/AddItems/AddItems";
import ManageItems from "../Pages/DashboardPages/AdminDashboardPages/ManageItems/ManageItems";
import UpdateItem from "../Pages/DashboardPages/AdminDashboardPages/UpdateItem/UpdateItem";
import Payment from "../Pages/DashboardPages/UserDashboardPages/Payment/Payment";
import PaymentHistory from "../Pages/DashboardPages/UserDashboardPages/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/DashboardPages/AdminDashboardPages/AdminHome/AdminHome";

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
        element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
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
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'payment-history',
                element: <PaymentHistory></PaymentHistory>
            },

            // admin
            {
                path: 'all-users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'add-item',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: 'manage-items',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: 'update/:id',
                element: <UpdateItem></UpdateItem>,
                loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path: 'admin-home',
                element: <AdminHome></AdminHome>
            }
        ]
    }
])

export default Route;