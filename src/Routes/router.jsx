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
          element:<PrivetRoute><AddPost></AddPost></PrivetRoute>
        },
        {
          path:"postDetails/:id",
          element:<PrivetRoute><PostDetails></PostDetails></PrivetRoute>,
          loader:({params})=>fetch(`http://localhost:3000/needAllPosts/${params.id}`),
          hydrateFallbackElement:<Loading></Loading>
        },
        {
          path:"profile",
          element:<PrivetRoute><Profile></Profile></PrivetRoute>
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