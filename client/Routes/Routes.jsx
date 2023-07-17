import { createBrowserRouter } from "react-router-dom";
import Main from "../src/Layout/Main";
import Home from "../src/Pages/Home/Home/Home";


const routes =createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])

export default routes;