import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthConrext';
import { FaRegEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const UserProfile = () => {
    const {user,updateUser}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleEdit=(e)=>{
      e.preventDefault()
      const displayName=e.target.name.value;
      const photoURL=e.target.photo.value;
     const updatedData={
      displayName,
      photoURL
     }
     console.log(updatedData)
      
      

      
    updateUser(updatedData).then(()=>{
     Swal.fire({
  position: "center",
  icon: "success",
  title: "Profile updated successfully!",
  showConfirmButton: false,
  timer: 1500
});


setTimeout(
   navigate(0) 
,1500)

   
    }).catch((error) => {
      Swal.fire({
  position: "center",
  icon: "error",
  title: error.message,
  showConfirmButton: false,
  timer: 1500
});
    })
    }
   
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

          <button onClick={()=>document.getElementById('volunteer_modal').showModal()}  className='flex items-center btn btn-primary'> <FaRegEdit /> Edit Profile </button>


        </div>


      </div>




      {/* modal */}

      
<dialog id="volunteer_modal" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    
          <h1 className='text-center text-3xl font-bold  '>Update Your Profile</h1>
  <form onSubmit={handleEdit} className='space-y-2'>
     <div>
        <label className="label text-sm">Name</label>
        <input
          type="text"
          name="name"
          className="input input-bordered opacity-70 w-full"
          placeholder='Enter your name'
          defaultValue={user?.displayName}
          required
        />
      </div>
      <div>
        <label className="label text-sm">Photo</label>
        <input
          type="url"
          name="photo"
          className="input input-bordered opacity-70 w-full"
          placeholder='Enter your photo URL'
          defaultValue={user?.photoURL}
          required
        />
      </div>


      <div className="modal-action">
        <button
          type="button"
          onClick={() => document.getElementById("volunteer_modal").close()}
          className="btn btn-outline hover:bg-secondary hover:text-white"
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary text-white">
          Update
        </button>
      </div>
  </form>

  </div>
</dialog>
      {/* modal end */}

      
        </div>
    );
};

export default UserProfile;