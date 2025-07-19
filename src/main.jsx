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
import { HelmetProvider } from 'react-helmet-async';
 AOS.init({ duration: 1000, once: true })

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <HelmetProvider>
     <RouterProvider router={router}></RouterProvider>
   </HelmetProvider>
   </AuthProvider>
  </StrictMode>,
)
