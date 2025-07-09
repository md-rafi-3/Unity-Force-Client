import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { FaEnvelope, FaUser, FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaArrowLeft } from "react-icons/fa";
import { AuthContext } from '../Context/AuthConrext';

const PostDetails = () => {
    const {user}=useContext(AuthContext)
    const { title,
    image,
    description,
    category,
    contactEmail,
    deadline,
    location,
    organizer,
    volunteersNeeded,}=useLoaderData()

    const navigate=useNavigate()
    
    return (
       <div className="max-w-7xl mx-auto  bg-base-100 p-3">
      {/* Left side: Main content */}
      
     
        <button onClick={()=>navigate(-1)} className='btn btn-primary'><FaArrowLeft /> Back</button>
       
        <div className='flex flex-col lg:flex-row gap-6 mt-3'>
            <div className="flex-1 md:max-w-70%">
        <img
          src={image || "https://via.placeholder.com/600x400"}
          alt={title}
          className="rounded-lg mb-6"
        />
        <div>
             <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-base-300">{description}</p>
        </div>
      </div>

      {/* Right side: Sidebar */}
      <div className="w-full border border-gray-300/40 dark:border-gray-600/40 md:max-w-[30%] bg-base-200 shadow-md rounded-md p-6 space-y-6 h-fit">
        <div>
          <h3 className="text-lg font-semibold mb-3">Opportunity Details</h3>
        {/*  */}
         <div className="flex items-center text-sm text-base-300 mb-2">
            <FaMapMarkerAlt className="mr-2" />
            {location}
          </div>
          <div className="flex items-center text-sm text-base-300 mb-2">
            <FaCalendarAlt className="mr-2" />
            Apply by: <span className="ml-1 font-semibold">{new Date(deadline).toDateString()}</span>
          </div>
          <div className="flex items-center text-sm text-base-300">
            <FaUsers className="mr-2" />
            {volunteersNeeded} volunteers needed
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Organizer Info</h3>
           <div className="flex items-center text-sm text-base-300 mb-2">
            <FaUser className="mr-2" />
            {organizer}
          </div>
          <div className="flex items-center text-sm text-base-300">
            <FaEnvelope className="mr-2" />
            {contactEmail}
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
          Be a Volunteer!
        </button>
      </div>
        </div>



        {/* model start */}
        <button
  className="btn"
  onClick={() => document.getElementById("volunteer_modal").showModal()}
>
  Open Application Modal
</button>

<dialog id="volunteer_modal" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box max-w-lg">
    <h3 className="text-xl font-bold mb-1">Volunteer Application</h3>
    <p className="text-sm mb-4 text-gray-500">
      You're applying to volunteer for:{" "}
      <span className="font-semibold text-base-300 ">Food Bank Distribution Day</span>
    </p>

    <form method="dialog" className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="label text-sm">Your Name</label>
          <input
            type="text"
            defaultValue={user?.displayName}
            readOnly
            className="input opacity-70 input-bordered w-full"
          />
        </div>
        <div className="flex-1">
          <label className="label text-sm">Your Email</label>
          <input
            type="email"
            readOnly
            defaultValue={user?.email}
            className="input opacity-70 input-bordered w-full"
          />
        </div>
      </div>

      <div>
        <label className="label text-sm">Post Location</label>
        <input
          type="text"
          defaultValue={location}
          className="input opacity-70 input-bordered w-full"
          readOnly
        />
      </div>

      <div>
        <label className="label text-sm">Application Deadline</label>
        <input
          type="text"
        
          defaultValue={deadline}
          className="input opacity-70 input-bordered w-full"
          readOnly
        />
      </div>

      <div>
        <label className="label text-sm">Suggestion / Message (Optional)</label>
        <textarea
          placeholder="Any message for the organizer?"
          className="textarea textarea-bordered w-full"
        ></textarea>
      </div>

      <div className="modal-action ">
        <button type='button' onClick={() => document.getElementById('volunteer_modal').close()}  className="btn btn-outline hover:bg-secondary hover:text-white">
          Cancel
        </button>
        <button type="submit" className="btn text-white btn-primary">
          Submit Application
        </button>
      </div>
    </form>
  </div>
</dialog>
        {/* modal end */}
    </div>
    );
};

export default PostDetails;