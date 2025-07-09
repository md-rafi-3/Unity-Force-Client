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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children:[
        {index:true,
            element:<Home></Home>,
            loader:()=>fetch("http://localhost:3000/needPosts"),
            hydrateFallbackElement:<Loading></Loading>
        },
        {
          path:"allPosts",
          element:<AllPost></AllPost>
        },
        {
          path:"addPost",
          element:<AddPost></AddPost>
        },
        {
          path:"postDetails/:id",
          element:<PostDetails></PostDetails>,
          loader:({params})=>fetch(`http://localhost:3000/needAllPosts/${params.id}`),
          hydrateFallbackElement:<Loading></Loading>
        },
        {
          path:"profile",
          element:<Profile></Profile>
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