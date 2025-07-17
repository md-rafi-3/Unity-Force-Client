import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Applications = () => {
    const applicantsData=useLoaderData()
    console.log(applicantsData)

    const handleStatusUpdate=(e,applicantId)=>{
       e.preventDefault()
       const status=e.target.value;
       console.log(status,applicantId)

      //  update status
      axios.patch(`http://localhost:3000/applications/status/${applicantId}`,{status}).then(res=>{
        console.log(res.data);
        if(res.data.modifiedCount){
          Swal.fire({
  position: "center",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
        }
      }).catch(error=>{
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
        <div className='max-w-7xl mx-auto'>

          <h1 className='text-4xl text-center font-bold mt-4 text-primary'>Post <span className='text-secondary'> Applications</span></h1>
            <div className="overflow-x-auto mt-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          No.
        </th>
        <th>Name</th>
        <th>Requested Post</th>
        <th>Requeste Date</th>
        <th>Status</th>
        <th>Update status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {applicantsData.map((applicants,index)=>(
        <tr>
        <th>
          {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={applicants?.volunteerPhotoURl}
                  alt={applicants.title} />
              </div>
            </div>
            <div>
              <div className="font-bold">{applicants.volunteerName}</div>
              <div className="text-sm opacity-50">{applicants.volunteerEmail}</div>
            </div>
          </div>
        </td>
        <td>
          {applicants.title}
          <br />
          <span >{applicants.location}</span>
        </td>

         <td> {new Date(applicants.requestDate).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}</td>
       <td>
  <button
    className={`badge badge-soft ${
      applicants.status === "approved"
        ? "badge-success"
        : applicants.status === "pending"
        ? "badge-warning"
        : "badge-error"
    }`}
  >
    {applicants.status === "approved"
      ? "Approved"
      : applicants.status === "pending"
      ? "Pending"
      : "Rejected"}
  </button>
</td>
        <th>
          <select onChange={(e)=>handleStatusUpdate(e,applicants._id)} name="status" className="select select-bordered w-full" defaultValue={applicants.status} required>
              <option value="">Update status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approve</option>
              <option value="rejected">Reject</option>
            </select>
        </th>
      </tr>
      ))}
      
    </tbody>
    
  </table>
</div>
            
        </div>
    );
};

export default Applications;