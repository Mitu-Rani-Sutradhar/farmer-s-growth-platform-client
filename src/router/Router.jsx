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
        element: <AllCrops></AllCrops>,
    },
    
    {
        path: "/profile",
        element: <Profile></Profile>,
    },
    {
        path: "/addCrops",
        element: <AddCrops></AddCrops>,
    },
    {
        path: "/myPosts",
        element: <MyPosts></MyPosts>,
    },
    {
        path: "/myInterests",
        element: <MyInterests></MyInterests>,
    },
    {
        path: "/*",
        element: <h2>Error-404</h2>,
    },
    
])
export default router;