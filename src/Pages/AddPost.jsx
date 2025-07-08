import React, { useContext} from "react";
import {
    FaEnvelope,
    FaUser,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaInfoCircle,
    FaAlignLeft,
    FaListUl,
    FaUsers,
    FaHandHoldingHeart,
    FaCheckCircle
} from "react-icons/fa";
import { AuthContext } from "../Context/AuthConrext";
import { IoMdPhotos } from "react-icons/io";
import axios from "axios";
import Swal from "sweetalert2";

const AddPost = () => {
    const { user } = useContext(AuthContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        const form=e.target
        const formData=new FormData(form)
        const data=Object.fromEntries(formData.entries())
        console.log(data)

        axios.post("http://localhost:3000/needPost",data).then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
  position: "center",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
            }
        }).catch((error) => {
         console.log(error.message)            
        })
    }
 

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 shadow-xl rounded-xl bg-base-200  border border-blue-300 hover:border-blue-500 ">
            <h1 className=" font-bold text-4xl justify-center mb-3 flex items-center "><span className='text-primary mr-1'><FaHandHoldingHeart size={23} /></span>Unity <span className='text-primary '>Force</span></h1>
            <h2 className="text-3xl font-bold text-center mb-4">Create Volunteer Opportunity</h2>
            <p className="mb-4 text-center text-gray-600">Help others find meaningful ways to make a difference in your community.</p>

            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Title */}
                <div className="space-y-1">
                    <label className="label font-medium flex text-sm items-center gap-2">
                        <FaInfoCircle />
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter a compelling title"
                        className="input  input-bordered w-full"
                        
                       
                        required
                    />
                </div>

                <div className="space-y-1">
                    <label className="label font-medium flex text-sm items-center gap-2">
                        <FaMapMarkerAlt />
                        Location
                    </label>
                    <input
                        type="text"
                        name="location"
                        placeholder="Where will volunteering take place?"
                        className="input input-bordered w-full"
                
                        
                        required
                    />
                </div>


                {/* Photo url */}
                <div className="space-y-1">
                    <label className="label font-medium flex text-sm items-center gap-2">
                        <IoMdPhotos />
                        Thumbnail URL
                    </label>
                    <input
                        type="url"
                        name="location"
                        placeholder="Enter a tumbnail URL"
                        className="input input-bordered w-full"
                     
                        required
                    />
                </div>



                {/* Description */}
                <div className="space-y-1">
                    <label className="label font-medium flex text-sm items-center gap-2">
                        <FaAlignLeft />
                        Description
                    </label>
                    <textarea
                        name="description"
                        placeholder="Describe what volunteers will do..."
                        className="textarea textarea-bordered w-full"
                     
                        maxLength={500}
                        required
                    />
                </div>

                {/* Category */}
            <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-1">
                    <label className="label font-medium flex text-sm items-center gap-2">
                        <FaListUl />
                        Category
                    </label>
                    <select
                        name="category"
                        className="select select-bordered w-full"
               
                      
                        required
                    >
                        <option value="">Select a category</option>
                        <option>Education</option>
                        <option>Environment</option>
                        <option>Healthcare</option>
                        <option>Community</option>
                    </select>
                </div>


                <div className="space-y-1">
  <label className="label font-medium flex text-sm items-center gap-2">
    <FaCheckCircle />
    Status
  </label>
  <select
    name="status"
    className="select select-bordered w-full"
    required
  >
    <option value="">Select a status</option>
    <option value="active">Active</option>
    <option value="close">Close</option>
  </select>
</div>

               </div>
                {/* Location */}

                {/* Volunteers & Deadline */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="label font-medium flex text-sm items-center gap-2">
                            <FaUsers />
                            Volunteers Needed
                        </label>
                        <input
                            type="number"
                            name="volunteersNeeded"
                            placeholder="Number of volunteers"
                            className="input input-bordered w-full"
                           
                            min="1"
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="label font-medium flex text-sm items-center gap-2">
                            <FaCalendarAlt />
                            Deadline
                        </label>
                        <input
                            type="date"
                            name="deadline"
                            className="input input-bordered  w-full"
                           
                            required

                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {/* Organizer */}
                    <div className="space-y-1">
                        <label className="label font-medium flex text-sm items-center gap-2">
                            <FaUser />
                            Organizer Name
                        </label>
                        <input
                            type="text"
                            name="organizer"
                            placeholder="Organizer Name"
                            className="input input-bordered  w-full"


                            defaultValue={user?.displayName || ""}
                            
                            required
                           readOnly={!!user?.displayName}
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                        <label className="label font-medium flex text-sm items-center gap-2">
                            <FaEnvelope />
                            Contact Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Contact Email"
                            className="input input-bordered w-full"
                             defaultValue={user?.email || ""}
                        
                            required
                            readOnly={!!user?.email}
                        />
                    </div>
                </div>

                <button className="btn text-white btn-primary w-full mt-4">Create Volunteer Post</button>
            </form>
        </div>
    );
};

export default AddPost;
