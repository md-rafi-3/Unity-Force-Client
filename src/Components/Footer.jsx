import React, { useContext } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHandHoldingHeart, FaRegEdit, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthConrext';
import { FaSquareXTwitter } from 'react-icons/fa6';


const Footer = () => {
  const {user}=useContext(AuthContext)
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
    {user&& <li><NavLink to="/addPost" className={({ isActive }) =>
             isActive
               ? 'text-primary underline'
               : ' hover:text-primary transition'
           }>Add Post</NavLink></li>}
    
 
     </>



      const socialLinks = (
    <>
      <a href="https://www.facebook.com" target='#' className="text-gray-600 hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="https://www.x.com" target='#' className="text-gray-600 hover:text-sky-400">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com"  target="#" className="text-gray-600 hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" target='#' className="text-gray-600 hover:text-blue-700">
              <FaLinkedinIn />
            </a>
    </>
  );

  return (
    <footer className="bg-base-200 border-gray-300/40 dark:border-gray-600/40  p-10 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ">
        {/* Brand Info */}
        <div>
         <a className=" font-bold text-2xl flex items-center "><span className='text-primary mr-1'><FaHandHoldingHeart size={28} /></span>Unity <span className='text-primary '>Force</span></a>
          <p className="text-sm mt-2 ">
            Connecting hearts and hands. Join us to make a difference in communities around the world.
          </p>
          <div className="flex gap-4 mt-4">
            {socialLinks}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer-title text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
           {links}
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="footer-title text-lg font-semibold mb-2">About</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Who We Are</a></li>
            <li><a href="#" className="hover:underline">Our Mission</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="footer-title text-lg font-semibold mb-2">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Volunteer Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
