import React, { useContext, useState } from "react";
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
import { IoMdPhotos } from "react-icons/io";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthConrext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router";
import { Helmet } from "react-helmet-async";

const UpdatePost = () => {
  const { user } = useContext(AuthContext);
  const postData = useLoaderData();

  const {
    category,
   
    deadline: loadedDeadline,
    description,
    image,
    location,
   
    status,
    title,
    volunteersNeeded,
    _id
  } = postData;

  const [deadline, setDeadline] = useState(loadedDeadline ? new Date(loadedDeadline) : null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (deadline) {
      data.deadline = deadline.toISOString().split("T")[0];
    }

    if (data?.volunteersNeeded) {
      data.volunteersNeeded = parseInt(data.volunteersNeeded);
    }

    // console.log(data);

    axios.put(`http://localhost:3000/allPosts/update/${_id}`, {data})
      .then((res) => {
        // console.log(res.data)
        if (res.data.modifiedCount) {
         Swal.fire({
  position: "center",
  icon: "success",
  title: "Volunteer post updated!",
  showConfirmButton: false,
  timer: 1500
});
          form.reset();
          setDeadline(null);
        }
      })
      .catch((error) => {
        Swal.fire({
  position: "center",
  icon: "error",
  title: error.message,
  showConfirmButton: false,
  timer: 1500
});
      });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow-xl rounded-xl bg-base-200 border border-gray-300/40 dark:border-gray-600/40">
       <Helmet>
                      <title>Unity-Force || Update-Post</title>
                  </Helmet>
      <h1 className="font-bold text-4xl justify-center mb-3 flex items-center">
        <span className="text-primary mr-1"><FaHandHoldingHeart size={23} /></span>
        Unity <span className="text-primary">Force</span>
      </h1>
      <h2 className="text-3xl font-bold text-center mb-4">Update Volunteer Opportunity</h2>
      <p className="mb-4 text-center text-gray-600">Modify your existing volunteer post and keep it up to date.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div className="space-y-1">
          <label className="label font-medium flex text-sm items-center gap-2">
            <FaInfoCircle /> Title
          </label>
          <input type="text" name="title" defaultValue={title} className="input input-bordered w-full" required />
        </div>

        {/* Location */}
        <div className="space-y-1">
          <label className="label font-medium flex text-sm items-center gap-2">
            <FaMapMarkerAlt /> Location
          </label>
          <input type="text" name="location" defaultValue={location} className="input input-bordered w-full" required />
        </div>

        {/* Thumbnail */}
        <div className="space-y-1">
          <label className="label font-medium flex text-sm items-center gap-2">
            <IoMdPhotos /> Thumbnail URL
          </label>
          <input type="url" name="image" defaultValue={image} className="input input-bordered w-full" required />
        </div>

        {/* Description */}
        <div className="space-y-1">
          <label className="label font-medium flex text-sm items-center gap-2">
            <FaAlignLeft /> Description
          </label>
          <textarea name="description" defaultValue={description} className="textarea textarea-bordered w-full" maxLength={500} required />
        </div>

        {/* Category and Status */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="label font-medium flex text-sm items-center gap-2">
              <FaListUl /> Category
            </label>
            <select name="category" defaultValue={category} className="select select-bordered w-full" required>
              <option value="">Select a category</option>
              <option>Education</option>
              <option>Environment</option>
              <option>Healthcare</option>
              <option>Community</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="label font-medium flex text-sm items-center gap-2">
              <FaCheckCircle /> Status
            </label>
            <select name="status" defaultValue={status} className="select select-bordered w-full" required>
              <option value="">Select a status</option>
              <option value="active">Active</option>
              <option value="close">Close</option>
            </select>
          </div>
        </div>

        {/* Volunteers and Deadline */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="label font-medium flex text-sm items-center gap-2">
              <FaUsers /> Volunteers Needed
            </label>
            <input type="number" name="volunteersNeeded" defaultValue={volunteersNeeded} className="input input-bordered w-full" min="1" required />
          </div>

          <div className="space-y-1">
            <label className="label font-medium flex text-sm items-center gap-2">
              <FaCalendarAlt /> Deadline
            </label>
            <DatePicker
              selected={deadline}
              onChange={(date) => setDeadline(date)}
              dateFormat="yyyy-MM-dd"
              minDate={new Date()}
              placeholderText="Select deadline"
              className="input input-bordered w-full"
              name="deadline"
              required
            />
          </div>
        </div>

        {/* Organizer & Email */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="label font-medium flex text-sm items-center gap-2">
              <FaUser /> Organizer Name
            </label>
            <input
              type="text"
              name="organizer"
              defaultValue={user?.displayName}
              className="input input-bordered w-full"
              readOnly
              required
            />
          </div>

          <div className="space-y-1">
            <label className="label font-medium flex text-sm items-center gap-2">
              <FaEnvelope /> Contact Email
            </label>
            <input
              type="email"
              name="contactEmail"
              defaultValue={user?.email}
              className="input input-bordered w-full"
              readOnly
              required
            />
          </div>
        </div>

        {/* Submit */}
        <button  className="btn text-white btn-primary w-full mt-4">Update Volunteer Post</button>
      </form>
    </div>
  );
};

export default UpdatePost;
