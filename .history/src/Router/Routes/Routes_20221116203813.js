import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import Main from "../../Layout/Main";
import AllReview from "../../pages/AllReview/AllReview";
import ReviewForm from "../../pages/ReviewForm/ReviewForm";
import AllServices from "../../pages/AllServices/AllServices";
import About from "../../pages/Home/About/About";
import Details from "../../pages/Home/Home/Details/Details";
import Home from "../../pages/Home/Home/Home";
import Services from "../../pages/Home/Services/Services";
import Login from "../../pages/Loging/Login";
import SingUp from "../../pages/SignUp/SingUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/services/:id',
                element:<Details></Details>,
                loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/allServices',
                element:<AllServices></AllServices>
            },
            {
                path:'/review/:id',
                element:<PrivateRoute><ReviewForm></ReviewForm> </PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/allreviews',
                element:<AllReview></AllReview>
            },
            {
                path:'/about',
                element:<About></About>
            }
        ]
    }
])
export default router;