import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Sign from "../Pages/SignUp/Sign";
import Login from "../Pages/Login/Login";
import DashboardLayout from "../Layout/DashboardLayout";
import OwnedResidences from "../Pages/Dashboard/OwnedResidences";


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
            }
        ]
    },
    {
        path:"/dashboard",
        element:<DashboardLayout></DashboardLayout> ,
        children:[
            {
                path:"/dashboard",
                element:<button className="btn">dasd</button>
            },
            {
                path:"/dashboard/owned",
                element:<OwnedResidences></OwnedResidences>
            },
        ]
    }
])

export default routes;