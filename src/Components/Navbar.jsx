import React, { useContext } from 'react';
import { MdLogin, MdOutlineLogin } from 'react-icons/md';
import DarkMode from './DarkMode';
import { Link, NavLink } from 'react-router';
import { FaHandHoldingHeart, FaRegEdit, FaRegUser } from 'react-icons/fa';
import { IoHomeOutline, IoSearchOutline } from 'react-icons/io5';
import { AuthContext } from '../Context/AuthConrext';
import Swal from 'sweetalert2';
import { LuLogOut } from 'react-icons/lu';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
  const {user,userSignOut}=useContext(AuthContext)

  console.log(user)
   const handleSignOut=()=>{
    userSignOut().then(() => {
      Swal.fire({
  position: "center",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
    }).catch((error) => {
      console.log(error.message)
    })
   }
    const links=<>
    <li><NavLink to="/" className={({ isActive }) =>
            isActive
              ? 'text-primary underline'
              : ' hover:text-primary transition'
          }><IoHomeOutline />Home</NavLink></li>
    <li><NavLink to="/allPosts" className={({ isActive }) =>
            isActive
              ? 'text-primary underline'
              : ' hover:text-primary transition'
          }><IoSearchOutline />All Posts</NavLink></li>
    <li><NavLink to="/addPost" className={({ isActive }) =>
            isActive
              ? 'text-primary underline'
              : ' hover:text-primary transition'
          }><FaRegEdit />Add Post</NavLink></li>
   

    </>
    return (
       <div className="navbar  bg-base-100  shadow-sm sticky top-0 z-50 md:px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      {!user &&  <li><Link to="/login"><MdOutlineLogin />Login / Sign Up</Link></li>}
      </ul>
    </div>
    <a className=" font-bold text-xl flex items-center "><span className='text-primary mr-1'><FaHandHoldingHeart size={23} /></span>Unity <span className='text-primary '>Force</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu text-base font-medium menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end flex pr-2 md:pr-0 items-center  gap-3">
    <DarkMode></DarkMode>

      {
          user ? (<div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img id="user-tooltip" src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar-placeholder.png"} alt={user.displayName}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Tooltip */}
            <Tooltip
              anchorSelect="#user-tooltip"
              place="bottom"
              content={user.displayName}
            />
            <div tabIndex={0}
              className="menu menu-sm dropdown-content border-[#3e743e20] bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <div><h3 className='text-sm'>{user?.displayName}</h3>
                <p className='text-xs'>{user?.email}</p>
              </div>
              <ul>
                <li>
                  <Link to="/myTips" >
                    <FaRegUser />Profile

                  </Link>
                </li>

                <li><button onClick={handleSignOut}><LuLogOut />Logout</button></li>
              </ul>
            </div>
          </div>) : <Link to="/login">
            <button className='md:flex hidden items-center gap-1 px-3 py-3 hover:bg-primary rounded-lg hover:text-white'><MdLogin />Login</button>
          </Link>
        }
      
  
  </div>
</div>
    );
};

export default Navbar;