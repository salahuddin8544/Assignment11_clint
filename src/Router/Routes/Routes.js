import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import Main from "../../Layout/Main";
import Chekout from "../../pages/Chekout/Chekout";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Loging/Login";
import SingUp from "../../pages/SignUp/SingUp";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<SingUp></SingUp>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/service/:id',
                element:<Chekout></Chekout>
            }
        ]
    }
])
export default router;