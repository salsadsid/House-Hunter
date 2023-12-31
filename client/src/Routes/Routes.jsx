import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Sign from "../Pages/SignUp/Sign";
import Login from "../Pages/Login/Login";
import DashboardLayout from "../Layout/DashboardLayout";
import OwnedResidences from "../Pages/Dashboard/OwnedResidences";
import PrivateRoute from "./PrivateRoute";
import OwnerRoute from "./OwnerRoute";
import Booking from "../Pages/Booking/Booking";
import RenterRoute from "./RenterRoute";
import BookingList from "../Pages/Dashboard/BookingList";


const routes =createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:'/sign',
                element:<Sign></Sign>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/booking/:id",
                element:<PrivateRoute><RenterRoute><Booking></Booking></RenterRoute></PrivateRoute>,
                loader:({params})=>fetch(`https://house-hunter-rrlc.onrender.com/api/v1/house/${params.id}`)
            }
        ]
    },
    {
        path:"/dashboard",
        element:<PrivateRoute><DashboardLayout></DashboardLayout> </PrivateRoute>,
        children:[
            {
                path:"/dashboard",
                element:<p className="text-3xl font-bold">Welcome To Dashboard</p>
            },
            {
                path:"/dashboard/owned",
                element:<OwnerRoute><OwnedResidences></OwnedResidences></OwnerRoute>
            },
            {
                path:"/dashboard/booking",
                element:<RenterRoute><BookingList></BookingList></RenterRoute>
            },
        ]
    }
])

export default routes;