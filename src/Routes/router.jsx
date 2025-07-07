import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import AllPost from '../Pages/AllPost';
import AddPost from '../Pages/AddPost';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {index:true,
            element:<Home></Home>,
            loader:()=>fetch("http://localhost:3000/needPosts")
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