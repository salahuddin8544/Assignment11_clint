import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import Main from "../../Layout/Main";
import AllReview from "../../pages/AllReview/AllReview";
import AllServices from "../../pages/AllServices/AllServices";
import About from "../../pages/Home/About/About";
import Details from "../../pages/Home/Home/Details/Details";
import Home from "../../pages/Home/Home/Home";
import Services from "../../pages/Home/Services/Services";
import Login from "../../pages/Loging/Login";
import ReviewForm from "../../pages/ReviewForm/ReviewForm";
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
                element:<ReviewForm></ReviewForm>,
                loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/allreview',
                element:<AllReview></AllReview>,
            },
            {
                path:'/about',
                element:<About></About>
            }
        ]
    }
])
export default router;