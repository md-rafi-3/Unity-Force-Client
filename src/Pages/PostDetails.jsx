import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { FaEnvelope, FaUser, FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaArrowLeft } from "react-icons/fa";
import { AuthContext } from '../Context/AuthConrext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

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
    volunteersNeeded,_id}=useLoaderData()

    const navigate=useNavigate()


    const handleSubmit=(e)=>{
        e.preventDefault()
        const form=e.target;
        const formData = new FormData(form);
        // console.log(formData)
    const data = Object.fromEntries(formData.entries());
         data.postId=_id 
         data.status="pending"
         data.requestDate=new Date().toISOString().split('T')[0];
          
         if (data?.volunteersNeeded) {
  data.volunteersNeeded = parseInt(data.volunteersNeeded);}
        // console.log(data)

        // console.log(typeof data.volunteersNeeded, data.volunteersNeeded)

        const requestedPostId=_id

        axios.post("https://unity-force-server-nine.vercel.app/applications",{data, requestedPostId}).then(res=>{
          //  console.log(res.data.updatePost.modifiedCount)
           if(res.data.updatePost.modifiedCount){
            Swal.fire({
  position: "center",
  icon: "success",
  title: "Volunteer request submitted successfully!",
  showConfirmButton: false,
  timer: 1500,
});


document.getElementById("volunteer_modal").close()
           }
          
          
            
            
        }).catch((error) => {
              document.getElementById("volunteer_modal").close()
            if(error.status===409){
                  // console.log(error)
          
            Swal.fire({
  position: "center",
  icon: "error",
  title: "You have already requested for this post.",
  showConfirmButton: false,
  timer: 1500
});
            }
           
        })
    }
    
    return (
       <div className="max-w-7xl mx-auto py-5  bg-base-100 px-3">
      {/* Left side: Main content */}
       <Helmet>
                      <title>Unity-Force || Post-Details</title>
                  </Helmet>
      
     
        <button onClick={()=>navigate(-1)} className='btn btn-primary'><FaArrowLeft /> Back</button>
       
        <div className='flex flex-col lg:flex-row gap-6 mt-3'>
            <div className="flex-1  md:w-[70%]">
        <img
          src={image || "https://via.placeholder.com/600x400"}
          alt={title}
          className="rounded-lg  mb-6"
        />
        <div>
             <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-base-300">{description}</p>
        </div>
      </div>

      {/* Right side: Sidebar */}
      <div className="w-full border border-gray-300/40 dark:border-gray-600/40 md:w-[30%] bg-base-200 shadow-md rounded-md p-6 space-y-6 h-fit">
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

        <button disabled={volunteersNeeded===0 ||user.email===contactEmail? true : false } onClick={() => document.getElementById("volunteer_modal").showModal()} className="btn btn-primary btn-block">
          Be a Volunteer!
        </button>
      </div>
        </div>



        {/* model start */}
      

<dialog id="volunteer_modal" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box max-w-2xl">
    <h3 className="text-xl font-bold mb-1">Volunteer Request Form</h3>
    <p className="text-sm mb-4 text-gray-500">
      You're requesting to volunteer for:{" "}
      <span className="font-semibold text-base-300">{title}</span>
    </p>

    <form onSubmit={handleSubmit} method="dialog" className="space-y-4">
      {/* Thumbnail */}
      <div>
        <label className="label text-sm">Thumbnail</label>
        <input
          type="text"
          name="thumbnail"
          readOnly
          defaultValue={image}
          className="input input-bordered opacity-70 w-full"
        />
      </div>

      {/* Title, Category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label text-sm">Post Title</label>
          <input
            type="text"
            name="title"
            readOnly
            defaultValue={title}
            className="input input-bordered opacity-70 w-full"
          />
        </div>
        <div>
          <label className="label text-sm">Category</label>
          <input
            type="text"
            name="category"
            readOnly
            defaultValue={category}
            className="input input-bordered opacity-70 w-full"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="label text-sm">Description</label>
        <textarea
          name="description"
          readOnly
          defaultValue={description}
          className="textarea textarea-bordered opacity-70 w-full"
        />
      </div>

      {/* Location, Volunteers Needed */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label text-sm">Location</label>
          <input
            type="text"
            name="location"
            readOnly
            defaultValue={location}
            className="input input-bordered opacity-70 w-full"
          />
        </div>
        <div>
          <label className="label text-sm">Volunteers Needed</label>
          <input
            type="number"
            name="volunteersNeeded"
            readOnly
            defaultValue={volunteersNeeded}
            className="input input-bordered opacity-70 w-full"
          />
        </div>
      </div>

      {/* Deadline, Organizer Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label text-sm">Deadline</label>
          <input
            type="text"
            name="deadline"
            readOnly
            defaultValue={deadline}
            className="input input-bordered opacity-70 w-full"
          />
        </div>
        <div>
          <label className="label text-sm">Organizer Name</label>
          <input
            type="text"
            name="organizerName"
            readOnly
            defaultValue={organizer}
            className="input input-bordered opacity-70 w-full"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="label text-sm">Organizer Email</label>
          <input
            type="email"
            name="organizerEmail"
            readOnly
            defaultValue={contactEmail}
            className="input input-bordered opacity-70 w-full"
          />
        </div>
      </div>

      {/* Volunteer Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label text-sm">Volunteer Name</label>
          <input
            type="text"
            name="volunteerName"
            readOnly
            defaultValue={user?.displayName}
            className="input input-bordered opacity-70 w-full"
          />
        </div>
        <div>
          <label className="label text-sm">Volunteer Email</label>
          <input
            type="email"
            name="volunteerEmail"
            readOnly
            defaultValue={user?.email}
            className="input input-bordered opacity-70 w-full"
          />
        </div>
      </div>


      {/* photo url */}
      <div>
        <label className="label text-sm">Volunteer Photo</label>
        <input
          type="url"
          name="volunteerPhotoURl"
          className="input input-bordered opacity-70 w-full"
          placeholder='Enter your photo URL'
          required
        />
      </div>

      {/* Suggestion */}
      <div>
        <label className="label text-sm">Suggestion / Message</label>
        <textarea
          name="suggestion"
          placeholder="Any message for the organizer?"
          className="textarea textarea-bordered w-full"
        ></textarea>
      </div>

      {/* Status (hidden) */}
      <input type="hidden" name="status" value="requested" />

      {/* Actions */}
      <div className="modal-action">
        <button
          type="button"
          onClick={() => document.getElementById("volunteer_modal").close()}
          className="btn btn-outline hover:bg-secondary hover:text-white"
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary text-white">
          Request
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