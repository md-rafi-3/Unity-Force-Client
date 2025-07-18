import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router";
import router from './Routes/router.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import AOS from 'aos'
import 'aos/dist/aos.css'
 AOS.init({ duration: 1000, once: true })

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
  </StrictMode>,
)
