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
                element:<PrivateRoute><Booking></Booking></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:8080/api/v1/house/${params.id}`)
            }
        ]
    },
    {
        path:"/dashboard",
        element:<PrivateRoute><DashboardLayout></DashboardLayout> </PrivateRoute>,
        children:[
            {
                path:"/dashboard",
                element:<button className="btn">dasd</button>
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