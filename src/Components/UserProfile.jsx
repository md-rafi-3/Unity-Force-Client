import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthConrext';
import { FaRegEdit } from 'react-icons/fa';

const UserProfile = () => {
    const {user}=useContext(AuthContext)
   
    return (
        <div >
            <div className='flex md:flex-row flex-col mt-3 items-center md:justify-start justify-center gap-3'>
        <div className="avatar">
          <div className="w-28 rounded-full">
            <img src={user?.photoURL} referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className='space-y-1 flex flex-col md:justify-start justyfy-center md:items-start items-center'>
          <h1 className='text-2xl font-bold'>{user?.displayName}</h1>
          <h1 className='text-accent'>{user?.email}</h1>
          <div className='flex gap-3 text-accent'>
           

           
          </div>

          <button  className='flex items-center btn btn-primary'> <FaRegEdit /> Edit Profile </button>


        </div>


      </div>

      
        </div>
    );
};

export default UserProfile;