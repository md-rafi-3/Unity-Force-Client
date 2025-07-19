import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import AllPost from '../Pages/AllPost';
import AddPost from '../Pages/AddPost';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Loading from '../Components/Loading';
import PostDetails from '../Pages/PostDetails';
import Profile from '../Pages/Profile';
import Error from '../Pages/Error';
import PrivetRoute from '../PrivetRoute/PrivetRoute';
import Applications from '../Pages/Applications';
import UpdatePost from '../Pages/UpdatePost';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children:[
        {index:true,
            element:<Home></Home>,
            loader:()=>fetch("https://unity-force-server-nine.vercel.app/allPosts"),
            hydrateFallbackElement:<Loading></Loading>
        },
        {
          path:"allPosts",
          element:<AllPost></AllPost>
        },
        {
          path:"addPost",
          element:<PrivetRoute><AddPost></AddPost></PrivetRoute>
        },
        {
          path:"postDetails/:id",
          element:<PrivetRoute><PostDetails></PostDetails></PrivetRoute>,
          loader:({params})=>fetch(`https://unity-force-server-nine.vercel.app/allPosts/${params.id}`),
          hydrateFallbackElement:<Loading></Loading>
        },
        {
          path:"profile",
          element:<PrivetRoute><Profile></Profile></PrivetRoute>
        },
        {
          path:"applications/:id",
          element:<PrivetRoute><Applications></Applications></PrivetRoute>,
          loader:({params})=>fetch(`https://unity-force-server-nine.vercel.app/applications/post/${params.id}`),
          hydrateFallbackElement:<Loading></Loading>
        },
        {
          path:"updatePost/:id",
          element:<PrivetRoute><UpdatePost></UpdatePost></PrivetRoute>,
          loader:({params})=>fetch(`https://unity-force-server-nine.vercel.app/allPosts/${params.id}`),
          hydrateFallbackElement:<Loading></Loading>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"signUp",
          element:<SignUp></SignUp>
        }
    ]
  },
]);

export default router;