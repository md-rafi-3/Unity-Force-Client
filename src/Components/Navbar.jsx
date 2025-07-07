import React from 'react';
import { MdOutlineLogin } from 'react-icons/md';
import DarkMode from './DarkMode';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links=<>
    <li><NavLink to="/" className={({ isActive }) =>
            isActive
              ? 'text-primary underline'
              : ' hover:text-primary transition'
          }>Home</NavLink></li>
    <li><NavLink to="/allPosts" className={({ isActive }) =>
            isActive
              ? 'text-primary underline'
              : ' hover:text-primary transition'
          }>All Posts</NavLink></li>
    <li><NavLink to="/addPost" className={({ isActive }) =>
            isActive
              ? 'text-primary underline'
              : ' hover:text-primary transition'
          }>Add Post</NavLink></li>
    </>
    return (
       <div className="navbar bg-base-100 shadow-sm md:px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className=" font-bold text-xl">Unity <span className='text-primary '>Force</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu text-base font-medium menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end flex items-center gap-3">
    <DarkMode></DarkMode>
    <a className=" btn-primary btn "><MdOutlineLogin />Login</a>
  </div>
</div>
    );
};

export default Navbar;