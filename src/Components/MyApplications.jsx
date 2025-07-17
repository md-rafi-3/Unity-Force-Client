import axios from 'axios';
import React, { use, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import {  MdCancel } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyApplications = ({myApplicationsPromise}) => {
    const myApplicationsData=use(myApplicationsPromise)
    console.log(myApplicationsData)
    const [applications,setApplications]=useState(myApplicationsData)


    const handleDelete=(id)=>{
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    axios.delete(`http://localhost:3000/applications/${id}`).then(res=>{
        console.log(res.data)
        if(res.data.deletedCount){
            Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });

    // remove from ui
    const remminingApplications=applications.filter(app=> app._id !== id);
    setApplications(remminingApplications)

   
        }
    }).catch(error=>{
        console.log(error)
        const errorMessage=error.message;

        Swal.fire({
      title: "Not Deleted!",
      text: errorMessage,
      icon: "error"
    });
    })
  }
});
    }
    return (
        <tbody>
      {/* row 1 */}
        {applications.map(application=>(<tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={application.thumbnail}
                  alt={application.title} />
              </div>
            </div>
            <div>
              <div className="font-bold">{application.title}</div>
              <div className="text-sm opacity-50">{application.location}</div>
            </div>
          </div>
        </td>
        <td>
          {application.organizerName}
          <br />
          <span >{application.organizerEmail}</span>
        </td>
        <td> {new Date(application.deadline).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}</td>
        
        <td>
  <button
    className={`badge badge-soft ${
      application.status === "approved"
        ? "badge-success"
        : application.status === "pending"
        ? "badge-warning"
        : "badge-error"
    }`}
  >
    {application.status === "approved"
      ? "Approved"
      : application.status === "pending"
      ? "Pending"
      : "Rejected"}
  </button>
</td>
        <td >
  <div className="join">
            
  
 <Link to={`/postDetails/${application._id}`}> <button className="btn btn-xs btn-primary join-item"><FaEye/>View</button></Link>

  <button onClick={()=>handleDelete(application._id)}  className="btn btn-xs join-item btn-secondary"><MdCancel />
Cancel</button>
  </div>

        </td>
      </tr>))}
      </tbody>
      
    );
};

export default MyApplications;