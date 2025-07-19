import React from 'react';
import errorLottie from '../assets/errorPage.json';
import Lottie from 'lottie-react';
import Navbar from '../Components/Navbar';
import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router';
import { Helmet } from 'react-helmet-async';


const Error = () => {
  return (
      <div>
         <Helmet>
                        <title>Unity-Force || Error</title>
                    </Helmet>
        <Navbar></Navbar>
         <div className="flex flex-col justify-center items-center  ">
      <div className="w-[300px] md:w-[500px]">
        <Lottie animationData={errorLottie} loop={true} />
      </div>

      <NavLink to="/"><button className='btn btn-primary'><FaHome />Back to home</button></NavLink>
    </div>

      </div>
  );
};

export default Error;