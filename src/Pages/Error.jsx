import React from 'react';
import errorLottie from '../assets/errorPage.json';
import Lottie from 'lottie-react';
import Navbar from '../Components/Navbar';
import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router';


const Error = () => {
  return (
      <div>
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