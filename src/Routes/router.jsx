import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import AllPost from '../Pages/AllPost';
import AddPost from '../Pages/AddPost';

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
        }
    ]
  },
]);

export default router;