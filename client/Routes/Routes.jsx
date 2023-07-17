import { createBrowserRouter } from "react-router-dom";
import Main from "../src/Layout/Main";
import Home from "../src/Pages/Home/Home/Home";
import Sign from "../src/Pages/SignUp/Sign";


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
            }
        ]
    }
])

export default routes;