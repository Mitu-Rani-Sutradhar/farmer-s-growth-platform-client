import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import AddCrops from "../pages/AddCrops";
import AllCrops from "../pages/AllCrops";
import MyPosts from "../pages/MyPosts";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import MyInterests from "../pages/MyInterests";
import PrivateRoute from "../provider/PrivateRoute"
import CropsDetails from "../pages/CropsDetails";



const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
        ],
    },
    {
        path: "/allCrops",
        element: 
            <AllCrops></AllCrops>,
    },
    
    {
        path: "/profile",
        element: 
            <Profile></Profile>,
    
    },
    {
        path: "/addCrops",
        element: <AddCrops></AddCrops>,
    },
    {
        path: "/myPosts",
        element: <PrivateRoute>
            <MyPosts></MyPosts>
        </PrivateRoute>,
    },
    {
        path: "/myInterests",
        element: <PrivateRoute>
            <MyInterests></MyInterests>
        </PrivateRoute>,
    },
    {
        path: "/cropDetails/:id",
        loader:({params}) => fetch(`http://localhost:3000/crops/${params.id}`),
        element: <PrivateRoute>
            <CropsDetails></CropsDetails>
        </PrivateRoute>,
    },

    {
        path: "/*",
        element: <h2>Error-404</h2>,
    },
    
])
export default router;